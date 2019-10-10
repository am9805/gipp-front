import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AddReportComponent } from './add-report/add-report.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';
import { ReportListComponent } from './report-list/report-list.component';
import { AuthGuard } from '../core/services/guards/auth.guard';
const reportRoutes: Routes = [
    { path: 'reporte/añadir', component: AddReportComponent, canActivate: [AuthGuard] },
    { path: 'reporte/gestionar/:id', component: ManageReportsComponent, canActivate: [AuthGuard]  },
    {
        path: 'reporte/listar', component: ReportListComponent, canActivate: [AuthGuard]
    },
    {
        path: 'reporte/listar/misReportes',
        component: ReportListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'reporte/listar/responsable',
        component: ReportListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'reporte/listar/investigador',
        component: ReportListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'reporte/listar/todos',
        component: ReportListComponent,
        canActivate: [AuthGuard]
    },

];

export const ReportRouter: ModuleWithProviders = RouterModule.forChild(reportRoutes);