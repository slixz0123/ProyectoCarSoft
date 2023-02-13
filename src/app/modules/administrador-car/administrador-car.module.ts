import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorCarRoutingModule } from './administrador-car-routing.module';
import { WelcomeAdministradorComponent } from './welcome-administrador/welcome-administrador.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WelcomeAdministradorComponent
  ],
  imports: [
    CommonModule,
    AdministradorCarRoutingModule,
    SharedModule
  ]
})
export class AdministradorCarModule { }
