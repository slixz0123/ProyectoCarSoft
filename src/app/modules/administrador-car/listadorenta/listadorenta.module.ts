import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadorentaRoutingModule } from './listadorenta-routing.module';
import { ListadorentaComponent } from './pages/listadorenta/listadorenta.component';


@NgModule({
  declarations: [
    ListadorentaComponent
  ],
  imports: [
    CommonModule,
    ListadorentaRoutingModule
  ],
  exports:[

  ]
})
export class ListadorentaModule { }
