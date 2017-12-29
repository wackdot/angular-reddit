import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 4', 'http://angular.io', 0),
      new Article('Fullstack', 'http://fullstack.io', 0),
      new Article('Postgresql', 'https://www.postgresql.org/', 0),
    ];
  }


  // Both input newtitle and newlink are now DOM elements, specifically HTMLInputElement
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
