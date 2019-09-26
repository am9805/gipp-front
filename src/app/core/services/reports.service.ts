import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  public API = 'https://gipp-back.herokuapp.com';
  constructor(private http: HttpClient) { }

  public addReport(report): Observable<any> {    
    return this.http.post(this.API + '/addreport', report);
  }

  public getAllReports(): Observable<any> {    
    return this.http.get(this.API + '/reports');
  }
  public getMyReports(userId): Observable<any> {    
    return this.http.get(this.API + `/userReports/${userId}`);
  }
  public getResponsibleReports(responsibleId): Observable<any> {    
    return this.http.get(this.API + `/responsibleReports/${responsibleId}`);
  }
}