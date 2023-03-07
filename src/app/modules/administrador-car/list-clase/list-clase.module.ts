import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    ListClaseRoutingModule,
    FormsModule
  ],exports:[
    ListClaseComponent
  ]
})
export class ListClaseModule { }
