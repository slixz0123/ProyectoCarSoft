import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoHomeRoutingModule } from './catalogo-home-routing.module';
import { CatalogoHomeComponent } from './pages/catalogo-home/catalogo-home.component';


@NgModule({
  declarations: [
    CatalogoHomeComponent
  ],
  imports: [
    CommonModule,
    CatalogoHomeRoutingModule
  ],
  exports:[
    CatalogoHomeComponent
  ]
})
export class CatalogoHomeModule { }
