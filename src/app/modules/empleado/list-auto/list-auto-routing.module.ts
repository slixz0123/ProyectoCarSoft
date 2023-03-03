import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAutoComponent } from './pages/list-auto/list-auto.component';

const routes: Routes = [
  {
    path:'',
    component:ListAutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAutoRoutingModule { }
