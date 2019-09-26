import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

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
    this.authService.login(userInfo).subscribe(response => {
      localStorage.setItem('userRol', response['data']['rol']);
      localStorage.setItem('userId', response['data']['id']);
        if(response){
          alert(response["message"])
          this.router.navigate(['/inicio']);
        }
    });
  }
}
