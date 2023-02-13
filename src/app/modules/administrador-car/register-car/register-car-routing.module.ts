import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistercarComponent } from './pages/registercar/registercar.component';

const routes: Routes = [
  {
    path:'',
    component: RegistercarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterCarRoutingModule { }
