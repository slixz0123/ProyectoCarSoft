import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'catalogo-client',
    loadChildren: () => import("./catalogo-renta-cliente/catalogo-renta-cliente.module").then(m => m.CatalogoRentaClienteModule)
  },
  {
    path: 'generar-rent-client',
    loadChildren: () => import("./generar-renta-cliente/generar-renta-cliente.module").then(m => m.GenerarRentaClienteModule)
  },
  {
    path: 'solicitud-client',
    loadChildren: () => import("./solicitud-renta-cliente/solicitud-renta-cliente.module").then(m => m.SolicitudRentaClienteModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
