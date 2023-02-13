import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRentaClienteRoutingModule } from './solicitud-renta-cliente-routing.module';
import { SolicitudRentaClienteComponent } from './pages/solicitud-renta-cliente/solicitud-renta-cliente.component';


@NgModule({
  declarations: [
    SolicitudRentaClienteComponent
  ],
  imports: [
    CommonModule,
    SolicitudRentaClienteRoutingModule
  ]
})
export class SolicitudRentaClienteModule { }
