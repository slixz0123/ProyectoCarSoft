import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAutoComponent } from './pages/register-auto/register-auto.component';

const routes: Routes = [
  {
    path:'',
    component: RegisterAutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAutoRoutingModule { }
