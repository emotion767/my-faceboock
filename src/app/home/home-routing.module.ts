import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'login', loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path: 'news-barrancodeloba-sin-gerente', loadChildren:()=>import('./news/news.module').then(m=>m.NewsModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
