import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCarRoutingModule } from './list-car-routing.module';
import { ListCarComponent } from './pages/list-car/list-car.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarcarPipe } from './buscarcar.pipe';


@NgModule({
  declarations: [
    ListCarComponent,
    BuscarcarPipe
  ],
  imports: [
    CommonModule,
    ListCarRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ListCarComponent
  ]
})
export class ListCarModule { }
