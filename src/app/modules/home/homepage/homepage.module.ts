import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomepageComponent

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    RouterModule,
    SharedModule,




  ],
  exports:[
 HomepageComponent
  ]
})
export class HomepageModule { }
