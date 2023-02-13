import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproveeRentaComponent } from './pages/aprovee-renta/aprovee-renta.component';

const routes: Routes = [
  {
    path: '',
    component:AproveeRentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AproveeRentaRoutingModule { }
