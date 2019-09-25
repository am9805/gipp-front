import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API = 'https://gipp-back.herokuapp.com';

  constructor(private http: HttpClient) { }

  login(userLogin): Observable<any> {
    return this.http.post(this.API + '/login', userLogin);
  }
}
