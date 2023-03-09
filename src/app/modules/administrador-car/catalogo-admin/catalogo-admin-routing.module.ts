import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoAdminComponent } from './pages/catalogo-admin/catalogo-admin.component';


const routes: Routes = [
  {
    path:'',
    component: CatalogoAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoAdminRoutingModule { }
