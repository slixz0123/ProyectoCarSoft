import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosHomeRoutingModule } from './nosotros-home-routing.module';
import { NosotrosHomeComponent } from './pages/nosotros-home/nosotros-home.component';


@NgModule({
  declarations: [
    NosotrosHomeComponent
  ],
  imports: [
    CommonModule,
    NosotrosHomeRoutingModule
  ],
  exports:
  [
    NosotrosHomeComponent
  ]
})
export class NosotrosHomeModule { }
