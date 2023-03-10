import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterClientRoutingModule } from './register-client-routing.module';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { RegistercarComponent } from '../../administrador-car/register-car/pages/registercar/registercar.component';


@NgModule({
  declarations: [
    RegisterClientComponent
  ],
  imports: [
    CommonModule,
    RegisterClientRoutingModule
  ],
  exports:[
    RegisterClientComponent
  ]
})
export class RegisterClientModule { }
