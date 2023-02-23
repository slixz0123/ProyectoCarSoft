import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MazdaRoutingModule } from './mazda-routing.module';
import { MazdaComponent } from './pages/mazda/mazda.component';


@NgModule({
  declarations: [
    MazdaComponent
  ],
  imports: [
    CommonModule,
    MazdaRoutingModule
  ],
  exports:[
    MazdaComponent
  ]
})
export class MazdaModule { }
