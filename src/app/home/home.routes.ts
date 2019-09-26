import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home.component';
 
const homeRoutes: Routes = [
    {path: 'inicio', component: HomeComponent}
];
 
export const HomeRouter: ModuleWithProviders = RouterModule.forChild(homeRoutes);