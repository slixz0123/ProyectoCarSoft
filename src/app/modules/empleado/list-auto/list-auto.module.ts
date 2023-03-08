import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAutoRoutingModule } from './list-auto-routing.module';
import { ListAutoComponent } from './pages/list-auto/list-auto.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarcarPipe } from './buscarcar.pipe';


@NgModule({
  declarations: [
    ListAutoComponent,
    BuscarcarPipe
  ],
  imports: [
    CommonModule,
    ListAutoRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ListAutoComponent
  ]
})
export class ListAutoModule { }
