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
    path : 'register-usr',
    loadChildren:() => import("./register-usr/register-usr.module").then(m => m.RegisterUsrModule)

  },
  {
    path : 'catalogo-home',
    loadChildren:() => import("./catalogo-home/catalogo-home.module").then(m => m.CatalogoHomeModule)

  },
  {
    path : 'servicios',
    loadChildren:() => import("./servicios-home/servicios-home.module").then(m => m.ServiciosHomeModule)

  },
  {
    path : 'nosotros',
    loadChildren:() => import("./nosotros-home/nosotros-home.module").then(m => m.NosotrosHomeModule)

  }
,
{
  path : 'kia',
  loadChildren:() => import("./kia/kia.module").then(m => m.KiaModule)

},
{
  path : 'mazda',
  loadChildren:() => import("./mazda/mazda.module").then(m => m.MazdaModule)

},
{
  path : 'toyota',
  loadChildren:() => import("./toyota/toyota.module").then(m => m.ToyotaModule)

}






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
