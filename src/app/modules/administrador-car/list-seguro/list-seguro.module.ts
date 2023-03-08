import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSeguroRoutingModule } from './list-seguro-routing.module';
import { ListSeguroComponent } from './pages/list-seguro/list-seguro.component';
import { BuscarPipe } from '../list-clase/buscar.pipe';
import { FormsModule } from '@angular/forms';
import { ListSeguroPipe } from '../list-seguro.pipe';


@NgModule({
  declarations: [
    ListSeguroComponent,
    BuscarPipe,

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
