import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from '../core/services/guards/auth.guard';
const coreRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'registro', component: RegisterComponent, canActivate: [AuthGuard] }
];

export const CoreRouter: ModuleWithProviders = RouterModule.forChild(coreRoutes);