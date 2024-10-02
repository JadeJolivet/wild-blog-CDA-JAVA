import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { RouterLink } from '@angular/router';


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
}
