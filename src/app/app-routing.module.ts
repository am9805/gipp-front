import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddreportComponent } from './core/components/addreport/addreport.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';


const routes: Routes = [
  { path: '',
    component: LoginComponent
  },
  { path: 'addreport',
    component: AddreportComponent
  },
  { path: 'singup',
  component: RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
