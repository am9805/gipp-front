import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list.component';
import {AddReportComponent} from './add-report/add-report.component';
import { ManageReportsComponent } from './manage-reports/manage-reports.component';
import { ReportRouter } from './report.routes'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReportListComponent, ManageReportsComponent, AddReportComponent ],
  imports: [
    CommonModule,
    ReportRouter,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class ReportsModule { }
