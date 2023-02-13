import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterEmpleadoRoutingModule } from './register-empleado-routing.module';
import { RegisterEmpleadoComponent } from './pages/register-empleado/register-empleado.component';


@NgModule({
  declarations: [
    RegisterEmpleadoComponent
  ],
  imports: [
    CommonModule,
    RegisterEmpleadoRoutingModule
  ],
  exports:[
    RegisterEmpleadoComponent
  ]
})
export class RegisterEmpleadoModule { }
