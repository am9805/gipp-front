import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  roles: any;

  constructor(
    private userService: UserService, 
    private authService: AuthService,
    private router: Router) { }

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
    this.getRoles();
  }

  getRoles(){
    this.userService.getRoles().subscribe( res => {
      this.roles = res
    })
  }

  send(){
    let registerInfo = {
      'name': this.registerForm.get('name').value,
      'lastname': this.registerForm.get('lastname').value,
      'email': this.registerForm.get('email').value,
      'password': this.registerForm.get('password').value,
      'rol': Number(this.registerForm.get('rol').value)
    };
    this.authService.registerUser(registerInfo).subscribe(res => {
      if(res){
        alert(res["message"])
        this.router.navigate(['/inicio']);
      }
    })
  };
}