import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
 
const coreRoutes: Routes = [
    { path: '', component: LoginComponent },
    {path: 'registro', component: RegisterComponent}
];
 
export const CoreRouter: ModuleWithProviders = RouterModule.forChild(coreRoutes);