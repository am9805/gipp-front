import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  public loginForm: FormGroup;
  public login: FormControl;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  send(){
    let userInfo = {
      'email': this.loginForm.get('email').value,
      'password':  this.loginForm.get('password').value
    };
    console.log(this.loginForm.get('email').value, this.loginForm.get('password').value);
    this.authService.login(userInfo).subscribe(response => {
      alert(response['message']);
    });
  }
}
