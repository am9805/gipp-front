import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API = 'https://gipp-back.herokuapp.com';
  //public API = 'localhost:3000';

  constructor(private http: HttpClient) { }

  public login(userLogin): Observable<any> {
    return this.http.post(this.API + '/login', userLogin);
  }

  public registerUser(newUserData): Observable<any> {
    return this.http.post(this.API + '/singup', newUserData);
  }

  public isLoged() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      return userId;
    } else {
      return null;
    }
  }

  public logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userRol');
    localStorage.removeItem('reportResponsableRol');
    localStorage.removeItem('reportInvestigatiorRol');
  }
}
