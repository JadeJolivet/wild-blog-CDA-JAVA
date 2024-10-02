import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ArticleComponentComponent } from '../article-component/article-component.component';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [ArticleComponentComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
})
export class ArticlesListComponent {
  articles: Article[] = inject(ArticleService).getArticles();
}
