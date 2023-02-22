import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClaseComponent } from './pages/register-clase/register-clase.component';

const routes: Routes = [
  {
    path:'',
    component:RegisterClaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterClaseRoutingModule { }
