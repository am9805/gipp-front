import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API = 'http://gipp-back.herokuapp.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.API + '/users');
  }
}
