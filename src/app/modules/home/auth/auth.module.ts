import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,


  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
