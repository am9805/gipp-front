import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API = 'https://gipp-back.herokuapp.com';
//   public API = 'localhost:3000';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.API + '/users');
  }

  public getRoles(): Observable<any> {
    return this.http.get(this.API + '/roles');
  }

  public getUserById(id): Observable<any> {
    return this.http.get(this.API + `/user/${id}`);
  }

}
