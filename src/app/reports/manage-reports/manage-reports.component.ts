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
  public report: FormControl;
  reportId;
  constructor(public reportService: ReportsService,
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    this.reportId = Number(this.activatedRoute.snapshot.url[2].path.toString());

    this.rol = localStorage.getItem('userRol');
    this.reportForm = new FormGroup({
      'responsibleId': new FormControl(''),
      'investigatorId': new FormControl(''),
      'impactLevel': new FormControl(''),
      'reportType': new FormControl(''),
    });
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  send() {
    const reportInfo = {
      'reportid': this.reportId,
      'responsibleid': Number(this.reportForm.get('responsibleId').value),
      'investigatorid': Number(this.reportForm.get('investigatorId').value),
      'impactLevel':  Number(this.reportForm.get('impactLevel').value),
      'reportType': this.reportForm.get('reportType').value,
    };

    console.log(reportInfo);
    
    // this.reportService.updateReport(reportInfo).subscribe(response => {
    //   if (response) {
    //     alert(response['message']);
    //     this.router.navigate(['/inicio']);
    //   }
    // });
  }
}