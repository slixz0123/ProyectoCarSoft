import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCarRoutingModule } from './register-car-routing.module';
import { RegistercarComponent } from './pages/registercar/registercar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistercarComponent
  ],
  imports: [
    CommonModule,
    RegisterCarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RegistercarComponent
  ]
})
export class RegisterCarModule { }
