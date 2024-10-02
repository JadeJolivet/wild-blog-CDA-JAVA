import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:id', component: ArticleComponentComponent },
  { path: 'articles' , component: ArticlesListComponent},
  { path: 'contact', component: ContactFormComponent},
  { path: 'sign-up', component: SignUpFormComponent },
  { path: '**', component: NotFoundComponent },
];
