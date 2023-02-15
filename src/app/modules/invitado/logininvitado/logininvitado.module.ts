import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogininvitadoRoutingModule } from './logininvitado-routing.module';
import { LogininvitadoComponent } from './pages/logininvitado/logininvitado.component';


@NgModule({
  declarations: [
    LogininvitadoComponent
  ],
  imports: [
    CommonModule,
    LogininvitadoRoutingModule
  ],
  exports:[
    LogininvitadoComponent
  ]
})
export class LogininvitadoModule { }
