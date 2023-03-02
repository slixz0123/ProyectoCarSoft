import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register-client',
    loadChildren: () => import("./register-client/register-client.module").then(m => m.RegisterClientModule)
  },
  {
    path: 'edit-client',
    loadChildren: () => import("./edit-client/edit-client.module").then(m => m.EditClientModule)
  },
  {
    path: 'list-client',
    loadChildren: () => import("./list-client/list-client.module").then(m => m.ListClientModule)
  },
  {
    path: 'catalogo-client',
    loadChildren: () => import("./catalogo-renta/catalogo-renta-routing.module").then(m => m.CatalogoRentaRoutingModule)
  },
  {
    path: 'crear-renta',
    loadChildren: () => import("./create-renta/create-renta-routing.module").then(m => m.CreateRentaRoutingModule)
  },
  {
    path: 'aprovee-renta',
    loadChildren: () => import("./aprovee-renta/aprovee-renta-routing.module").then(m => m.AproveeRentaRoutingModule)
  },
  // auto
  {
    path: 'register-auto',
    loadChildren: () => import("./register-auto/register-auto.module").then(m => m.RegisterAutoModule)
  },

  {
    path: 'list-auto',
    loadChildren: () => import("./list-auto/list-auto.module").then(m => m.ListAutoModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
