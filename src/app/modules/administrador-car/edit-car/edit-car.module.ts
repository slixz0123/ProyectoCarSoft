import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCarRoutingModule } from './edit-car-routing.module';
import { EditCarComponent } from './pages/edit-car/edit-car.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditCarComponent
  ],
  imports: [
    CommonModule,
    EditCarRoutingModule,
    FormsModule
  ],
  exports:[
    EditCarComponent
  ]
})
export class EditCarModule { }
