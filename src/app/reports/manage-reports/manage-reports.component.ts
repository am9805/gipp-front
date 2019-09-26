import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from 'src/app/core/services/reports.service';
import {UserService} from '../../core/services/user.service'
import { Router } from '@angular/router';

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
  constructor(public reportService: ReportsService,private router: Router, private userService: UserService) { }

  

  ngOnInit() {
    this.rol = localStorage.getItem('userRol');
    this.reportForm = new FormGroup({
      'responsibleId': new FormControl('', Validators.required),
      'investigatorId': new FormControl('', Validators.required),
    });
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  send(){
    let reportInfo = {
      'reportid': '',
      'responsibleid': this.reportForm.get('responsibleId').value,
      'investigatorid': this.reportForm.get('investigatorId').value,
    };
    console.log(reportInfo);
    this.reportService.addReport(reportInfo).subscribe(response => {
      if(response){
        alert(response["message"])
        this.router.navigate(['/']);
      }
    });
  }
}