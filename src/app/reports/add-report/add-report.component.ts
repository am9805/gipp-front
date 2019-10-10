import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReportsService } from 'src/app/core/services/reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.sass']
})
export class AddReportComponent implements OnInit {

  constructor(public reportService: ReportsService,
    private router: Router) { }

  public reportForm: FormGroup;
  public report: FormControl;

  ngOnInit() {
    this.reportForm = new FormGroup({
      'zone': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
    });
  }

  send() {
    const reportInfo = {
      'userid': Number(localStorage.getItem('userId')),
      'zone': this.reportForm.get('zone').value,
      'date': this.reportForm.get('date').value,
      'description': this.reportForm.get('description').value,
      'estate': 'Activo'
    };
    this.reportService.addReport(reportInfo).subscribe(response => {
      if (response) {
        alert(response['message']);
        this.router.navigate(['/inicio']);
      }
    });
  }
}