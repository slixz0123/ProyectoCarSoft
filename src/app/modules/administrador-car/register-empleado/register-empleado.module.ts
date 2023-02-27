import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterEmpleadoRoutingModule } from './register-empleado-routing.module';
import { RegisterEmpleadoComponent } from './pages/register-empleado/register-empleado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterEmpleadoComponent
  ],
  imports: [
    CommonModule,
    RegisterEmpleadoRoutingModule,
    FormsModule,
  ],
  exports:[
    RegisterEmpleadoComponent
  ]
})
export class RegisterEmpleadoModule { }
