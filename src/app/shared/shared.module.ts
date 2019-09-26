import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetUserInfoPipe } from './pipes/getUserInfoPipe'

@NgModule({
  declarations: [GetUserInfoPipe],
  imports: [
    CommonModule
  ],
  exports:[
    GetUserInfoPipe
  ]
})
export class SharedModule { }
