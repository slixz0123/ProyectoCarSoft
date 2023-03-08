import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoEmpleadoComponent } from './pages/bienvenido-empleado/bienvenido-empleado.component';

const routes: Routes = [
  {
    path:'',
    component: BienvenidoEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidaEmpleadoRoutingModule { }
