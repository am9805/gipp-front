import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home.component';
import { HttpClientModule } from '@angular/common/http';
import {HomeRouter} from './home.routes'

@NgModule({
  declarations: [HomeComponent],
  exports : [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRouter
  ]
})
export class HomeModule { }
