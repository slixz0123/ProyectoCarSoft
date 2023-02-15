import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAdministradorComponent } from './modules/administrador-car/welcome-administrador/welcome-administrador.component';
import { WelcomeEmpleadoComponent } from './modules/empleado/welcome-empleado/welcome-empleado.component';

import { WelcomeHomeComponent } from './modules/home/welcome-home/welcome-home.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeHomeComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) // se importa un modulo que tiene routing es decir ruta

  },
  {
    path: 'admin-carsoft',
    component: WelcomeAdministradorComponent,
    loadChildren: () => import('./modules/administrador-car/administrador-car.module').then(m => m.AdministradorCarModule) // se importa un modulo que tiene routing es decir ruta

  },
  {
    path: 'employee-carsoft',
    component: WelcomeEmpleadoComponent,
    loadChildren: () => import('./modules/empleado/empleado.module').then(m => m.EmpleadoModule) // se importa un modulo que tiene routing es decir ruta

  },
  {
    path: 'invitado-carsoft',
    component: WelcomeEmpleadoComponent,
    loadChildren: () => import('./modules/invitado/invitado.module').then(m => m.InvitadoModule) // se importa un modulo que tiene routing es decir ruta

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
