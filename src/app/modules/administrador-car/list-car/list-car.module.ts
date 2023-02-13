import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCarRoutingModule } from './list-car-routing.module';
import { ListCarComponent } from './pages/list-car/list-car.component';


@NgModule({
  declarations: [
    ListCarComponent
  ],
  imports: [
    CommonModule,
    ListCarRoutingModule
  ],
  exports:[
    ListCarComponent
  ]
})
export class ListCarModule { }
