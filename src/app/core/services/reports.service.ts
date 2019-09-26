import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  public API = 'https://gipp-back.herokuapp.com';
  constructor(private http: HttpClient) { }

  addReport(report): Observable<any> {    
    return this.http.post(this.API + '/addreport', report);
  }
}