import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditClientRoutingModule } from './edit-client-routing.module';
import { EditClienteComponent } from './pages/edit-cliente/edit-cliente.component';


@NgModule({
  declarations: [
    EditClienteComponent
  ],
  imports: [
    CommonModule,
    EditClientRoutingModule
  ],
  exports:[
    EditClienteComponent
  ]
})
export class EditClientModule { }
