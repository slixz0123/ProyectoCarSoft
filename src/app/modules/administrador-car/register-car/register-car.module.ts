import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCarRoutingModule } from './register-car-routing.module';
import { RegistercarComponent } from './pages/registercar/registercar.component';


@NgModule({
  declarations: [
    RegistercarComponent
  ],
  imports: [
    CommonModule,
    RegisterCarRoutingModule
  ],
  exports:[
    RegistercarComponent
  ]
})
export class RegisterCarModule { }
