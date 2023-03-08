import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaEmpleadoRoutingModule } from './bienvenida-empleado-routing.module';
import { BienvenidoEmpleadoComponent } from './pages/bienvenido-empleado/bienvenido-empleado.component';


@NgModule({
  declarations: [
    BienvenidoEmpleadoComponent
  ],
  imports: [
    CommonModule,
    BienvenidaEmpleadoRoutingModule
  ],
  exports:[
    BienvenidoEmpleadoComponent
  ]
})
export class BienvenidaEmpleadoModule { }
