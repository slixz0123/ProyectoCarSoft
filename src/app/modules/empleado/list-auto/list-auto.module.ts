import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAutoRoutingModule } from './list-auto-routing.module';
import { ListAutoComponent } from './pages/list-auto/list-auto.component';


@NgModule({
  declarations: [
    ListAutoComponent
  ],
  imports: [
    CommonModule,
    ListAutoRoutingModule
  ],
  exports:[
    ListAutoComponent
  ]
})
export class ListAutoModule { }
