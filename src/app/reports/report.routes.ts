import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AddReportComponent } from './add-report/add-report.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';
import { ReportListComponent } from './report-list/report-list.component';

const reportRoutes: Routes = [
    { path: 'reporte/añadir', component: AddReportComponent },
    { path: 'reporte/gestionar/:id', component: ManageReportsComponent },
    {
        path: 'reporte/listar', component: ReportListComponent,
    },
    {
        path: 'reporte/listar/misReportes',
        component: ReportListComponent
    },
    {
        path: 'reporte/listar/responsable',
        component: ReportListComponent
    },
    {
        path: 'reporte/listar/investigador',
        component: ReportListComponent
    },
    {
        path: 'reporte/listar/todos',
        component: ReportListComponent
    },

];

export const ReportRouter: ModuleWithProviders = RouterModule.forChild(reportRoutes);