import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRentaComponent } from './pages/create-renta/create-renta.component';

const routes: Routes = [
  {
    path:'',
    component: CreateRentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRentaRoutingModule { }
