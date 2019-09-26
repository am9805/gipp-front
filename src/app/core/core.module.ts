import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {CoreRouter} from './core.routes'
import { RegisterComponent } from './components/register/register.component'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports : [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreRouter
  ]
})
export class CoreModule { }
