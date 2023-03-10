import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import("./bienvenida-admin/bienvenida-admin.module").then(m => m.BienvenidaAdminModule)
  },

  {
    path: 'catalogo-admin',
    loadChildren: () => import("./catalogo-admin/catalogo-admin.module").then(m => m.CatalogoAdminModule)
  },



    {
      path: 'register-car',
      loadChildren: () => import("./register-car/register-car.module").then(m => m.RegisterCarModule)
    },

    {
      path: 'list-car',
      loadChildren: () => import("./list-car/list-car.module").then(m => m.ListCarModule)
    },

    //empleado
    {
      path: 'register-employee',
      loadChildren: () => import("./register-empleado/register-empleado.module").then(m => m.RegisterEmpleadoModule)
    },

    {
      path: 'list-employees',
      loadChildren: () => import("./list-empleado/list-empleado.module").then(m => m.ListEmpleadoModule)
    },
    //CLASE

    {
      path: 'register-class',
      loadChildren: () => import("./register-clase/register-clase.module").then(m => m.RegisterClaseModule)
    },

    {
      path: 'list-class',
      loadChildren: () => import("./list-clase/list-clase.module").then(m => m.ListClaseModule)
    },

    // seguro
    {
      path: 'list-seguro',
      loadChildren: () => import("./list-seguro/list-seguro.module").then(m => m.ListSeguroModule)
    },
    //cliente
    {
      path: 'list-cliente',
      loadChildren: () => import("./list-clientes/list-clientes.module").then(m => m.ListClientesModule)
    },
    {
      path: 'register-cliente',
      loadChildren: () => import("./register-clientes/register-clientes.module").then(m => m.RegisterClientesModule)
    },
    {
      path: 'renta-aprov',
      loadChildren: () => import("./listadorenta/listadorenta.module").then(m => m.ListadorentaModule)
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorCarRoutingModule { }
