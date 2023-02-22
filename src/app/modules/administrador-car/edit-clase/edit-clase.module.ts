import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditClaseRoutingModule } from './edit-clase-routing.module';
import { EditClaseComponent } from './pages/edit-clase/edit-clase.component';


@NgModule({
  declarations: [
    EditClaseComponent
  ],
  imports: [
    CommonModule,
    EditClaseRoutingModule
  ],
  exports:[
    EditClaseComponent
  ]
})
export class EditClaseModule { }
