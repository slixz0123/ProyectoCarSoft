import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCarRoutingModule } from './edit-car-routing.module';
import { EditCarComponent } from './pages/edit-car/edit-car.component';


@NgModule({
  declarations: [
    EditCarComponent
  ],
  imports: [
    CommonModule,
    EditCarRoutingModule
  ],
  exports:[
    EditCarComponent
  ]
})
export class EditCarModule { }
