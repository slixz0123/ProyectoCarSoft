import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClaseRoutingModule } from './list-clase-routing.module';
import { ListClaseComponent } from './pages/list-clase/list-clase.component';
import { BuscarPipe } from './buscar.pipe';


@NgModule({
  declarations: [
    ListClaseComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ListClaseRoutingModule
  ],exports:[
    ListClaseComponent
  ]
})
export class ListClaseModule { }
