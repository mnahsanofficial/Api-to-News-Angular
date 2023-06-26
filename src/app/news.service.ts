import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = 'db36c2515e30401daef72f89930c0035';
  private apiUrl = 'https://newsapi.org/v2/everything?q=apple&from=2023-06-21&to=2023-06-21&sortBy=popularity&apiKey=db36c2515e30401daef72f89930c0035';
  constructor(private http: HttpClient) { }

  getNews() {
    // const url = `${this.apiUrl}?apiKey=${this.apiKey}`;
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }

  getNewsDetails(id: string) {
    // const url = `${this.apiUrl}/${id}?apiKey=${this.apiKey}`;
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}
