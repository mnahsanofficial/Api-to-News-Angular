import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  newsId: string = '';
  newsDetails: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newsId = params['id'];
      this.getNewsDetails();
    });
  }

  getNewsDetails() {
    this.newsService.getNewsDetails(this.newsId).subscribe(details => {
      this.newsDetails = details;
    });
  }
}
