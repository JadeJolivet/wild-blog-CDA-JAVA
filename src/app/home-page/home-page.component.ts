import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service'; 
import { inject } from '@angular/core';
import { Article } from '../models/article.model';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  title = "Welcome on Jade's Wild Blog";

  articleService: ArticleService = inject(ArticleService);
  articles: Article[] = this.articleService.getArticles();
}
