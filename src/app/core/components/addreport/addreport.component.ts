import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.component.html',
  styleUrls: ['./addreport.component.sass']
})
export class AddreportComponent implements OnInit {

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
