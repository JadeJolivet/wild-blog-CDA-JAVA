import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss',
})
export class ArticleComponentComponent {
  article: Article = {
    title: 'My First Article',
    author: 'Jade Jolivet',
    content:
      "I am a student at Wild Code School, where I am currently learning Angular. I absolutely love the experience! Angular's powerful features and robust framework make building dynamic web applications so enjoyable. The support from my instructors and the collaborative environment with my peers enhance my learning journey, and I'm excited to continue developing my skills in this technology. Additionally, I appreciate how Angular promotes good coding practices and helps me think in a more structured way. The ability to create reusable components is particularly exciting, as it allows for greater efficiency in my projects. Overall, this learning experience has deepened my passion for web development, and I look forward to applying my knowledge in real-world applications.",
    image:
      'https://img.freepik.com/free-photo/celebration-labour-day-with-3d-cartoon-portrait-working-woman_23-2151306618.jpg?t=st=1727280796~exp=1727284396~hmac=50a40d9568bdba19a965651fdb318021fd35220f4bbbad8739f3dc12744452e5&w=1800',
    isPublished: false,
    comment: '',
  };

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
