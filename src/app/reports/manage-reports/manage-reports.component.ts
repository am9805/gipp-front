import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from 'src/app/core/services/reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-reports',
  templateUrl: './manage-reports.component.html',
  styleUrls: ['./manage-reports.component.sass']
})
export class ManageReportsComponent implements OnInit {

  constructor(public reportService: ReportsService,private router: Router) { }

  public reportForm: FormGroup;
  public report: FormControl;

  ngOnInit() {
    this.reportForm = new FormGroup({
      'userid': new FormControl('', Validators.required),
      'zone': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
    });
  }

  send(){
    let reportInfo = {
      'userid': this.reportForm.get('userid').value,
      'zone': this.reportForm.get('zone').value,
      'date': this.reportForm.get('date').value,
      'description': this.reportForm.get('description').value
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