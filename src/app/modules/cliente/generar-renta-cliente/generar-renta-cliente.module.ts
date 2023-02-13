import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarRentaClienteRoutingModule } from './generar-renta-cliente-routing.module';
import { GenerarRentaClienteComponent } from './pages/generar-renta-cliente/generar-renta-cliente.component';


@NgModule({
  declarations: [
    GenerarRentaClienteComponent
  ],
  imports: [
    CommonModule,
    GenerarRentaClienteRoutingModule
  ],exports:[
    GenerarRentaClienteComponent
  ]
})
export class GenerarRentaClienteModule { }
