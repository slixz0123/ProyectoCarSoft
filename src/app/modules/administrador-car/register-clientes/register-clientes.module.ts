import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterClientesRoutingModule } from './register-clientes-routing.module';
import { RegisterClientesComponent } from './pages/register-clientes/register-clientes.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    RegisterClientesComponent
  ],
  imports: [
    CommonModule,
    RegisterClientesRoutingModule,
    FormsModule,

  ],
  exports:[
    RegisterClientesComponent
  ]
})
export class RegisterClientesModule { }
