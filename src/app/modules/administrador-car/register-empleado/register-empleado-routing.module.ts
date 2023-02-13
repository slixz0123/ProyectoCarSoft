import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmpleadoComponent } from './pages/register-empleado/register-empleado.component';

const routes: Routes = [
  {
    path:'',
    component: RegisterEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterEmpleadoRoutingModule { }
