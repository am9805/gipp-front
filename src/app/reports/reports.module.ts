import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';

@NgModule({
  declarations: [ReportListComponent, ManageReportsComponent],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
