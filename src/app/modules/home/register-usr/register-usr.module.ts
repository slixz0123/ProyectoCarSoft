import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUsrRoutingModule } from './register-usr-routing.module';

import { RegisterUsrComponent } from './pages/register-usr/register-usr.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterUsrComponent
  ],
  imports: [
    CommonModule,
    RegisterUsrRoutingModule,
    FormsModule,
  ],
  exports:[
    RegisterUsrComponent
  ]
})
export class RegisterUsrModule { }
