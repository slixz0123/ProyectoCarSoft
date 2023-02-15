import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosHomeComponent } from './pages/nosotros-home/nosotros-home.component';

const routes: Routes = [
  {
    path:'',
    component:NosotrosHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosHomeRoutingModule { }
