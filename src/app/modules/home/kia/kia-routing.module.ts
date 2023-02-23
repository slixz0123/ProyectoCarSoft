import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KiaComponent } from './pages/kia/kia.component';

const routes: Routes = [
  {
    path:'',
  component:KiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiaRoutingModule { }
