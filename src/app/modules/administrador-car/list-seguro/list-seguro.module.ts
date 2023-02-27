import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSeguroRoutingModule } from './list-seguro-routing.module';
import { ListSeguroComponent } from './pages/list-seguro/list-seguro.component';


@NgModule({
  declarations: [
    ListSeguroComponent
  ],
  imports: [
    CommonModule,
    ListSeguroRoutingModule
  ],
  exports:[
    ListSeguroComponent
  ]
})
export class ListSeguroModule { }
