import { CommonModule } from '@angular/common';
import { Component, Input, inject, EventEmitter, Output } from '@angular/core';
import { Article } from '../models/article.model';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  @Input()
  article!: Article;

  @Output() likeEvent: EventEmitter<string> = new EventEmitter<string>();

  like() {
    this.article.likes++;

    this.likeEvent.emit(this.article.title);
  }

  articleService: ArticleService = inject(ArticleService);
  articles: Article[] = this.articleService.getArticles();
}
