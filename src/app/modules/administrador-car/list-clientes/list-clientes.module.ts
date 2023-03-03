import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListClientesRoutingModule } from './list-clientes-routing.module';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { BuscarPipe } from './buscar.pipe';


@NgModule({
  declarations: [
    ListClientesComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ListClientesRoutingModule,
    FormsModule
  ],
  exports:[
    ListClientesComponent
  ]
})
export class ListClientesModule { }
