import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


    {
      path: 'register-car',
      loadChildren: () => import("./register-car/register-car.module").then(m => m.RegisterCarModule)
    },
    {
      path: 'edit-car',
      loadChildren: () => import("./edit-car/edit-car.module").then(m => m.EditCarModule)
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
      path: 'edit-employee',
      loadChildren: () => import("./edit-empleado/edit-empleado.module").then(m => m.EditEmpleadoModule)
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
      path: 'edit-class',
      loadChildren: () => import("./edit-clase/edit-clase.module").then(m => m.EditClaseModule)
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorCarRoutingModule { }
