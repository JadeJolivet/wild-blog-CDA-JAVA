import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    {
      id: 1,
      title: 'My First Article',
      author: 'Jade Jolivet',
      content:
        "I am a student at Wild Code School, where I am currently learning Angular. I absolutely love the experience! Angular's powerful features and robust framework make building dynamic web applications so enjoyable. The support from my instructors and the collaborative environment with my peers enhance my learning journey, and I'm excited to continue developing my skills in this technology. Additionally, I appreciate how Angular promotes good coding practices and helps me think in a more structured way. The ability to create reusable components is particularly exciting, as it allows for greater efficiency in my projects. Overall, this learning experience has deepened my passion for web development, and I look forward to applying my knowledge in real-world applications.",
      image:
        'https://img.freepik.com/free-photo/celebration-labour-day-with-3d-cartoon-portrait-working-woman_23-2151306618.jpg?t=st=1727280796~exp=1727284396~hmac=50a40d9568bdba19a965651fdb318021fd35220f4bbbad8739f3dc12744452e5&w=1800',
      isPublished: false,
      comment: '',
      likes: 120,
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 75,
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: '',
      likes: 200,
    },
    {
      id: 4,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 120,
    },
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article {
    return this.articles.find(
      (article: Article) => article.id == id
    ) as Article;
  }
}
