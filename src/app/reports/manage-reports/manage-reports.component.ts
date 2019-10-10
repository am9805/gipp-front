import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from 'src/app/core/services/reports.service';
import { UserService } from '../../core/services/user.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-reports',
  templateUrl: './manage-reports.component.html',
  styleUrls: ['./manage-reports.component.sass']
})
export class ManageReportsComponent implements OnInit {
  rol: string;
  users: any;
  public reportForm: FormGroup;
  public investigationAdvanceForm: FormGroup;
  reportId;
  investigationAdvanceFormS = false;
  showIAdvanceList = false;
  userId: string;
  advances: any;

  constructor(public reportService: ReportsService,
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    this.reportId = Number(this.activatedRoute.snapshot.url[2].path.toString());

    this.rol = localStorage.getItem('userRol');
    this.userId = localStorage.getItem('userId');
    this.reportForm = new FormGroup({
      'responsibleId': new FormControl(''),
      'investigatorId': new FormControl(''),
      'impactLevel': new FormControl(''),
      'reportType': new FormControl(''),
    });

    this.investigationAdvanceForm = new FormGroup({
      'reportId': new FormControl(''),
      'investigatorId': new FormControl(''),
      'description': new FormControl(''),
    });
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  showInvestigationAdvanceForm() {
    this.investigationAdvanceFormS = !this.investigationAdvanceFormS;
    this.showIAdvanceList = false;
  }
  showInvestigationAdvanceList() {
    this.showIAdvanceList = !this.showIAdvanceList;
    this.investigationAdvanceFormS = false;
    this.reportService.getInvestigationAdvByReport(this.reportId).subscribe(res => {
      this.advances = res['data'];
    });
  }

  send() {
    const reportInfo = {
      'reportid': this.reportId,
      'responsibleid': Number(this.reportForm.get('responsibleId').value),
      'investigatorid': Number(this.reportForm.get('investigatorId').value),
      'impactLevel': Number(this.reportForm.get('impactLevel').value),
      'reportType': this.reportForm.get('reportType').value,
    };
    this.reportService.updateReport(reportInfo).subscribe(response => {
      if (response) {
        alert(response['message']);
        this.router.navigate(['/inicio']);
      }
    });
  }

  sendInvestigationAdvance() {
    const investigationAdvanceInfo = {
      'reportid': this.reportId,
      'investigatorid': Number(this.userId),
      'description': this.investigationAdvanceForm.get('description').value,
    };
    this.reportService.addInvestigationAdv(investigationAdvanceInfo).subscribe(response => {
      if (response) {
        alert(response['message']);
        this.investigationAdvanceFormS = false;
        this.investigationAdvanceForm.get('description').setValue('');
      }
    });
  }
}