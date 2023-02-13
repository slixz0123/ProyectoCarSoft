import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEmpleadoRoutingModule } from './edit-empleado-routing.module';
import { EditEmpleadoComponent } from './pages/edit-empleado/edit-empleado.component';


@NgModule({
  declarations: [
    EditEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EditEmpleadoRoutingModule
  ],
  exports:[
    EditEmpleadoComponent
  ]
})
export class EditEmpleadoModule { }
