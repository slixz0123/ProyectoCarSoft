import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToyotaRoutingModule } from './toyota-routing.module';
import { ToyotaComponent } from './pages/toyota/toyota.component';


@NgModule({
  declarations: [
    ToyotaComponent
  ],
  imports: [
    CommonModule,
    ToyotaRoutingModule
  ],
  exports:[
    ToyotaComponent
  ]
})
export class ToyotaModule { }
