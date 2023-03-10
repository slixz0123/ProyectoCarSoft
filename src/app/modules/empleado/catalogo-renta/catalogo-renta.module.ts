import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRentaRoutingModule } from './catalogo-renta-routing.module';
import { CatalogoRentaComponent } from './pages/catalogo-renta/catalogo-renta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogoRentaComponent
  ],
  imports: [
    CommonModule,
    CatalogoRentaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CatalogoRentaComponent
  ]
})
export class CatalogoRentaModule { }
