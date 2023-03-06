import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoRentaComponent } from '../../empleado/catalogo-renta/pages/catalogo-renta/catalogo-renta.component';
import { CatalogoRentaClienteComponent } from './pages/catalogo-renta-cliente/catalogo-renta-cliente.component';

const routes: Routes = [
  {
    path:'',
    component: CatalogoRentaClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRentaClienteRoutingModule { }
