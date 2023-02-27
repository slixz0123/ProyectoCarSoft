import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterClaseRoutingModule } from './register-clase-routing.module';
import { RegisterClaseComponent } from './pages/register-clase/register-clase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterClaseComponent
  ],
  imports: [
    CommonModule,
    RegisterClaseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
RegisterClaseComponent
  ]
})
export class RegisterClaseModule { }
