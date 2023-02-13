import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRentaRoutingModule } from './catalogo-renta-routing.module';
import { CatalogoRentaComponent } from './pages/catalogo-renta/catalogo-renta.component';


@NgModule({
  declarations: [
    CatalogoRentaComponent
  ],
  imports: [
    CommonModule,
    CatalogoRentaRoutingModule
  ],
  exports:[
    CatalogoRentaComponent
  ]
})
export class CatalogoRentaModule { }
