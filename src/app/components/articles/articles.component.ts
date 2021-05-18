import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToArticle(scr: string): void {
    this.router.navigateByUrl('article' + '#' + scr);
  }
}
