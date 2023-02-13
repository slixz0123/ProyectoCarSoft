import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRentaRoutingModule } from './create-renta-routing.module';
import { CreateRentaComponent } from './pages/create-renta/create-renta.component';


@NgModule({
  declarations: [
    CreateRentaComponent
  ],
  imports: [
    CommonModule,
    CreateRentaRoutingModule
  ],
  exports:[
    CreateRentaComponent
  ]
})
export class CreateRentaModule { }
