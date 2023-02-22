import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KiaRoutingModule } from './kia-routing.module';
import { KiaComponent } from './pages/kia/kia.component';


@NgModule({
  declarations: [
    KiaComponent
  ],
  imports: [
    CommonModule,
    KiaRoutingModule
  ],
  exports:[
    KiaComponent
  ]
})
export class KiaModule { }
