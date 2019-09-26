import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.sass']
})
export class AddReportComponent implements OnInit {

  constructor() { }

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
}
