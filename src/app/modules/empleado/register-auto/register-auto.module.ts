import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAutoRoutingModule } from './register-auto-routing.module';
import { RegisterAutoComponent } from './pages/register-auto/register-auto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterAutoComponent
  ],
  imports: [
    CommonModule,
    RegisterAutoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
    RegisterAutoComponent
  ]
})
export class RegisterAutoModule { }
