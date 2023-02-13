import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRentaClienteRoutingModule } from './catalogo-renta-cliente-routing.module';
import { CatalogoRentaClienteComponent } from './pages/catalogo-renta-cliente/catalogo-renta-cliente.component';


@NgModule({
  declarations: [
    CatalogoRentaClienteComponent
  ],
  imports: [
    CommonModule,
    CatalogoRentaClienteRoutingModule
  ],
  exports:[
    CatalogoRentaClienteComponent
  ]
})
export class CatalogoRentaClienteModule { }
