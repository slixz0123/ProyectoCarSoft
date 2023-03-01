import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientesRoutingModule } from './list-clientes-routing.module';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';


@NgModule({
  declarations: [
    ListClientesComponent
  ],
  imports: [
    CommonModule,
    ListClientesRoutingModule
  ],
  exports:[
    ListClientesComponent
  ]
})
export class ListClientesModule { }
