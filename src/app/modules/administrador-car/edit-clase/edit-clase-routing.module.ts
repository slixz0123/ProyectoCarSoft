import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClaseComponent } from './pages/edit-clase/edit-clase.component';

const routes: Routes = [
  {
    path:'',
    component: EditClaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditClaseRoutingModule { }
