import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCarComponent } from './pages/edit-car/edit-car.component';

const routes: Routes = [
  {
    path:'',
    component: EditCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCarRoutingModule { }
