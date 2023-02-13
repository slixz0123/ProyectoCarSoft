import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCarComponent } from '../edit-car/pages/edit-car/edit-car.component';
import { EditEmpleadoComponent } from './pages/edit-empleado/edit-empleado.component';

const routes: Routes = [
  {
    path:'',
    component: EditEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditEmpleadoRoutingModule { }
