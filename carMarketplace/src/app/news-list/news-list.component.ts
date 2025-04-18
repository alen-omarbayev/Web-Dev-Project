import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-list',
  standalone: false,
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsList = this.newsService.getNews();
  }
}
