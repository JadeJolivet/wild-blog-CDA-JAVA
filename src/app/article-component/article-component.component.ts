import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../models/article.model';
import { inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service'; 

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  articles: Article[];

  constructor() {
    this.articles = [];
  }

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
  }

  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  articleService: ArticleService = inject(ArticleService);
  articleId!: number;
  article!: Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.article = this.articleService.getArticleById(this.articleId);
    if (this.article === undefined) {
      this.router.navigate(['/not-found']);
    }
  }
}
