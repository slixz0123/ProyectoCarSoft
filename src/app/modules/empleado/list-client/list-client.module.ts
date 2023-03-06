import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListClientRoutingModule } from './list-client-routing.module';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { BuscarPipe } from './buscar.pipe';


@NgModule({
  declarations: [
    ListClientComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ListClientRoutingModule,
    FormsModule
  ],
  exports:[
    ListClientComponent
  ]
})
export class ListClientModule { }
