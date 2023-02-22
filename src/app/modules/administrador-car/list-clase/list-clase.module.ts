import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClaseRoutingModule } from './list-clase-routing.module';
import { ListClaseComponent } from './pages/list-clase/list-clase.component';


@NgModule({
  declarations: [
    ListClaseComponent
  ],
  imports: [
    CommonModule,
    ListClaseRoutingModule
  ],exports:[
    ListClaseComponent
  ]
})
export class ListClaseModule { }
