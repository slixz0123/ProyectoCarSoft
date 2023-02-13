import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoRentaComponent } from './pages/catalogo-renta/catalogo-renta.component';

const routes: Routes = [
  {
    path:'',
    component: CatalogoRentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRentaRoutingModule { }
