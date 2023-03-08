import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSeguroRoutingModule } from './list-seguro-routing.module';
import { ListSeguroComponent } from './pages/list-seguro/list-seguro.component';

import { FormsModule } from '@angular/forms';

import { BuscarPipe } from './buscar.pipe';



@NgModule({
  declarations: [
    ListSeguroComponent,
    BuscarPipe

  ],
  imports: [
    CommonModule,
    ListSeguroRoutingModule,
    FormsModule
  ],
  exports:[
    ListSeguroComponent,
    BuscarPipe
  ]
})
export class ListSeguroModule { }
