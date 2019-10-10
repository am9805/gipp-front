import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { AuthGuard } from '../core/services/guards/auth.guard';
const homeRoutes: Routes = [
    {path: 'inicio', component: HomeComponent, canActivate: [AuthGuard]}
];
 
export const HomeRouter: ModuleWithProviders = RouterModule.forChild(homeRoutes);