import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoHomeComponent } from '../../home/catalogo-home/pages/catalogo-home/catalogo-home.component';

const routes: Routes = [
  {
    path:'',
    component: CatalogoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoAdminRoutingModule { }
