import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudRentaClienteComponent } from './pages/solicitud-renta-cliente/solicitud-renta-cliente.component';

const routes: Routes = [
  {
    path:'',
    component: SolicitudRentaClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRentaClienteRoutingModule { }
