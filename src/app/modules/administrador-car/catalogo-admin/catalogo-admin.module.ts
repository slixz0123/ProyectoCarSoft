import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoAdminRoutingModule } from './catalogo-admin-routing.module';
import { CatalogoAdminComponent } from './pages/catalogo-admin/catalogo-admin.component';


@NgModule({
  declarations: [
    CatalogoAdminComponent
  ],
  imports: [
    CommonModule,
    CatalogoAdminRoutingModule
  ],
  exports:[
    CatalogoAdminComponent
  ]
})
export class CatalogoAdminModule { }
