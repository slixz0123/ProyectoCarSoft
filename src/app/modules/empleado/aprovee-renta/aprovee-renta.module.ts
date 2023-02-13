import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AproveeRentaRoutingModule } from './aprovee-renta-routing.module';
import { AproveeRentaComponent } from './pages/aprovee-renta/aprovee-renta.component';


@NgModule({
  declarations: [
    AproveeRentaComponent
  ],
  imports: [
    CommonModule,
    AproveeRentaRoutingModule
  ],
  exports:[
    AproveeRentaComponent
  ]
})
export class AproveeRentaModule { }
