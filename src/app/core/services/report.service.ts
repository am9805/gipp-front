import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  public API = 'https://gipp-back.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllReports(): Observable<any> {
    return ;
  }
  getReportByUser(): Observable<any> {
    return ;
  }
  getReportByResponsible(): Observable<any> {
    return ;
  }
  getReportByInvestigator(): Observable<any> {
    return ;
  }
  addReport(): Observable<any> {
    return ;
  }
  updateReport(): Observable<any> {
    return ;
  }

}
