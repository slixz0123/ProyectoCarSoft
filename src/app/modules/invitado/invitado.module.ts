import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitadoRoutingModule } from './invitado-routing.module';
import { WelcomeInvitadoComponent } from './welcome-invitado/welcome-invitado.component';


@NgModule({
  declarations: [
    WelcomeInvitadoComponent
  ],
  imports: [
    CommonModule,
    InvitadoRoutingModule
  ]
})
export class InvitadoModule { }
