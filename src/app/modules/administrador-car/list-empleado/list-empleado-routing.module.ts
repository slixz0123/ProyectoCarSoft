import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadoComponent } from './pages/list-empleado/list-empleado.component';

const routes: Routes = [
  {
    path:'',
    component:ListEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEmpleadoRoutingModule { }
