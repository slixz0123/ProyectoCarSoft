import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAutoRoutingModule } from './register-auto-routing.module';
import { RegisterAutoComponent } from './pages/register-auto/register-auto.component';


@NgModule({
  declarations: [
    RegisterAutoComponent
  ],
  imports: [
    CommonModule,
    RegisterAutoRoutingModule
  ],exports:[
    RegisterAutoComponent
  ]
})
export class RegisterAutoModule { }
