import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddreportComponent } from './core/components/addreport/addreport.component';
import { LoginComponent } from './core/components/login/login.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
