import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToyotaComponent } from './pages/toyota/toyota.component';

const routes: Routes = [
  {
    path:'',
    component:ToyotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToyotaRoutingModule { }
