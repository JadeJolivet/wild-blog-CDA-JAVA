import { Component } from '@angular/core';
import { ArticleComponentComponent } from './article-component/article-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ArticleComponentComponent
  ],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Jade';
}
