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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
