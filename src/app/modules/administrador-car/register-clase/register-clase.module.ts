import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterClaseRoutingModule } from './register-clase-routing.module';
import { RegisterClaseComponent } from './pages/register-clase/register-clase.component';


@NgModule({
  declarations: [
    RegisterClaseComponent
  ],
  imports: [
    CommonModule,
    RegisterClaseRoutingModule
  ],exports:[
RegisterClaseComponent
  ]
})
export class RegisterClaseModule { }
