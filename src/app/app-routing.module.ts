import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'pages/home/news-barrancodeloba-sin-gerente',
  pathMatch: 'full'
},{
  path: 'pages/home',
  loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
