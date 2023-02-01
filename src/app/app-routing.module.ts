import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeHomeComponent } from './modules/home/welcome-home/welcome-home.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeHomeComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) // se importa un modulo que tiene routing es decir ruta 

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
