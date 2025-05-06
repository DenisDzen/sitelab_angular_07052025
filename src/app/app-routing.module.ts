import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ServicesComponent } from './main/services/services.component';
import { WorkComponent } from './main/work/work.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';

const routes: Routes = [
  // Украинские маршруты (базовый путь теперь '')
  { path: '', component: HomeComponent }, // Главная УКР на '/'
  { path: 'about', component: AboutComponent }, // УКР About на '/about'
  { path: 'services', component: ServicesComponent }, // УКР Services на '/services'
  { path: 'work', component: WorkComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'testimonials', component: TestimonialsComponent },

  // Английские маршруты (с префиксом 'en')
  { path: 'en', component: HomeComponent }, // Главная ENG на '/en'
  { path: 'en/about', component: AboutComponent }, // ENG About на '/en/about'
  { path: 'en/services', component: ServicesComponent },
  { path: 'en/work', component: WorkComponent },
  { path: 'en/blog', component: BlogComponent },
  { path: 'en/contact', component: ContactComponent },
  { path: 'en/experience', component: ExperienceComponent },
  { path: 'en/testimonials', component: TestimonialsComponent },

  // Опционально: перенаправление для всех остальных (неизвестных) путей на главную УКР
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }