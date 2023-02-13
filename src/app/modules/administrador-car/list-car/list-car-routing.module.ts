import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCarComponent } from './pages/list-car/list-car.component';

const routes: Routes = [
  {
    path:'',
    component: ListCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCarRoutingModule { }
