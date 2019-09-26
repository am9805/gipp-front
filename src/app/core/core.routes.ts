import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
 
const coreRoutes: Routes = [
    { path: '', component: LoginComponent }
];
 
export const CoreRouter: ModuleWithProviders = RouterModule.forChild(coreRoutes);