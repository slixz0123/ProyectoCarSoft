import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListEmpleadoRoutingModule } from './list-empleado-routing.module';
import { ListEmpleadoComponent } from './pages/list-empleado/list-empleado.component';
import { BuscarePipe } from './buscare.pipe';


@NgModule({
  declarations: [
    ListEmpleadoComponent,
    BuscarePipe
  ],
  imports: [
    CommonModule,
    ListEmpleadoRoutingModule,
    FormsModule
  ]
})
export class ListEmpleadoModule { }
