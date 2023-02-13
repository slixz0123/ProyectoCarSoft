import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEmpleadoRoutingModule } from './list-empleado-routing.module';
import { ListEmpleadoComponent } from './pages/list-empleado/list-empleado.component';


@NgModule({
  declarations: [
    ListEmpleadoComponent
  ],
  imports: [
    CommonModule,
    ListEmpleadoRoutingModule
  ]
})
export class ListEmpleadoModule { }
