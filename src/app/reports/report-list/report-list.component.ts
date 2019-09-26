import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../core/services/reports.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.sass']
})
export class ReportListComponent implements OnInit {

  constructor(
    private reportService: ReportsService,
    private userService: UserService) { }

  reports = [];
  ngOnInit() {
    this.getReports();
    
  }
   getReports(){
    this.reportService.getReports().subscribe(res =>{
      this.reports = res
      console.log(this.reports);
      
    });
   }

   public gertUserById(id){
     this.userService.getUserById(id).subscribe(res =>{
      return `${res['data']['name']} ${res['data']['lastname']}`;
      
    });
   }
}
