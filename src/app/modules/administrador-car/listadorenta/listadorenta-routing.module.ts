import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadorentaComponent } from './pages/listadorenta/listadorenta.component';

const routes: Routes = [
  {
    path:'',
    component:ListadorentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadorentaRoutingModule { }
