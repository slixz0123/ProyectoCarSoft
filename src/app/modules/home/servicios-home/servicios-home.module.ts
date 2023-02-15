import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosHomeRoutingModule } from './servicios-home-routing.module';
import { ServiciosHomeComponent } from './pages/servicios-home/servicios-home.component';


@NgModule({
  declarations: [
    ServiciosHomeComponent
  ],
  imports: [
    CommonModule,
    ServiciosHomeRoutingModule
  ],
  exports:[
    ServiciosHomeComponent
  ]
})
export class ServiciosHomeModule { }
