import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CargascripsjsService } from './services/cargascripsjs.service';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderlogsidebarComponent } from './components/headerlogsidebar/headerlogsidebar.component';
import { Headerlogsidebar2Component } from './components/headerlogsidebar2/headerlogsidebar2.component';
import { HeaderlogsidebarAdministradorComponent } from './components/headerlogsidebar-administrador/headerlogsidebar-administrador.component';
import { HeaderlogsidebarClienteComponent } from './components/headerlogsidebar-cliente/headerlogsidebar-cliente.component';



@NgModule({
  declarations: [


    HeaderComponent,
        SidebarComponent,
        FooterComponent,
        HeaderlogsidebarComponent,
        HeaderComponent,
        Headerlogsidebar2Component,
        HeaderlogsidebarAdministradorComponent,
        HeaderlogsidebarClienteComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
     SidebarComponent,
    FooterComponent,
    HeaderlogsidebarComponent,
    Headerlogsidebar2Component,
    HeaderlogsidebarAdministradorComponent,
    HeaderlogsidebarClienteComponent

  ]
})
export class SharedModule { }
