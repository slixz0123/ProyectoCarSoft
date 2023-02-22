import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClaseComponent } from './pages/list-clase/list-clase.component';

const routes: Routes = [
  {
    path:'',
    component:ListClaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListClaseRoutingModule { }
