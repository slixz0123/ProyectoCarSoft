import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarRentaClienteComponent } from './pages/generar-renta-cliente/generar-renta-cliente.component';

const routes: Routes = [
  {
    path:'',
    component: GenerarRentaClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarRentaClienteRoutingModule { }
