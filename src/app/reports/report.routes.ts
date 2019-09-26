import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AddReportComponent } from './add-report/add-report.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';
import { ReportListComponent } from './report-list/report-list.component';
 
const reportRoutes: Routes = [
    { path: 'añadir/reporte', component: AddReportComponent },
    { path: 'gestionar/reporte', component: ManageReportsComponent },
    { path: 'listar/reporte', component: ReportListComponent }
];
 
export const ReportRouter: ModuleWithProviders = RouterModule.forChild(reportRoutes);