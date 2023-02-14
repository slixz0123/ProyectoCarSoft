import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    loadChildren:() => import("./homepage/homepage.module").then(m => m.HomepageModule)
  } ,
  {
    path : 'Auth',
    loadChildren:() => import("./auth/auth.module").then(m => m.AuthModule)

  },
  {
    path : 'catalogo-home',
    loadChildren:() => import("./catalogo-home/catalogo-home.module").then(m => m.CatalogoHomeModule)

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
