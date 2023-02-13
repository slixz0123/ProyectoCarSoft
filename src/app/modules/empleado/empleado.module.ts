import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { WelcomeEmpleadoComponent } from './welcome-empleado/welcome-empleado.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WelcomeEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    SharedModule
  ]
})
export class EmpleadoModule { }
