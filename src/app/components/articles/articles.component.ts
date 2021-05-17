import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToArticle(scr: string) {
    this._router.navigateByUrl('article'+'#'+scr);
  }
}
