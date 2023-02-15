import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogininvitadoComponent } from './pages/logininvitado/logininvitado.component';

const routes: Routes = [
  {
    path:'',
    component: LogininvitadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogininvitadoRoutingModule { }
