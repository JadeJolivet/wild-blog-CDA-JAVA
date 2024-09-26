import { Component } from '@angular/core';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  headerTitle = "Welcome on Jade's Wild Blog";

  articles = [
    {
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 120,
    },
    {
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://img.freepik.com/free-vector/gradient-api-illustration_23-2149385318.jpg?t=st=1727362924~exp=1727366524~hmac=3db09d2ae22dc6425cb001da4996dc4dc995d4f95536e720182a0c218b16398d&w=1480',
      isPublished: true,
      comment: '',
      likes: 75,
    },
    {
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://assets-eu-01.kc-usercontent.com/f54dad16-3321-01f2-e65c-957b5a310277/36961122-2fd0-4bd1-8aad-40c4c5dfa139/benefits_of_typescript_without_typescript_blog_index.webp',
      isPublished: true,
      comment: '',
      likes: 200,
    },
  ];
}
