import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaClienteRoutingModule } from './bienvenida-cliente-routing.module';
import { BienvenidaClienteComponent } from './pages/bienvenida-cliente/bienvenida-cliente.component';


@NgModule({
  declarations: [
    BienvenidaClienteComponent
  ],
  imports: [
    CommonModule,
    BienvenidaClienteRoutingModule
  ],
  exports:[
    BienvenidaClienteComponent
  ]
})
export class BienvenidaClienteModule { }
