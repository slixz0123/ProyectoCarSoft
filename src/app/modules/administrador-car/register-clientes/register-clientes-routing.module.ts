import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientesComponent } from './pages/register-clientes/register-clientes.component';

const routes: Routes = [
{
  path:'',
  component: RegisterClientesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterClientesRoutingModule { }
