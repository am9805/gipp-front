import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public registerForm: FormGroup;
  public register: FormControl;

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'rol': new FormControl('', Validators.required)
    });
  }
}