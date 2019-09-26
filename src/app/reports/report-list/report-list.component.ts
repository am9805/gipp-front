import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../core/services/reports.service';
import { UserService } from '../../core/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.sass']
})
export class ReportListComponent implements OnInit {
  path;
  userId: string;

  constructor(
    private reportService: ReportsService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  reports = [];
  ngOnInit() {
    this.path = this.activatedRoute.snapshot.url[2].path.toString();
    this.userId = localStorage.getItem('userId');
    console.log(this.path);
    switch(this.path){ 
      case 'misReportes': { 
         this.getMyReports(); 
         break; 
      } 
      case 'todos': { 
        this.getAllReports();
         break; 
      } 
      case 'responsable': { 
        this.getResponsibleReports();
        break; 
     } 
     case 'investigador': { 
      //statements; 
      break; 
   } 
      default: { 
         //statements; 
         break; 
      } 
   } 
    
    
  }
   getAllReports(){
    this.reportService.getAllReports().subscribe(res =>{
      this.reports = res['data']
      console.log(this.reports);
      
    });
   }

   getResponsibleReports(){
    this.reportService.getResponsibleReports(this.userId).subscribe(res =>{
      this.reports = res['data']
      console.log(this.reports);
      
    });
   }
 /**
  * TODAVIA NO ESTA
  */
   getInvestigatorReports(){
    this.reportService.getAllReports().subscribe(res =>{
      this.reports = res['data']
      console.log(this.reports);
      
    });
   }

   getMyReports(){
    this.reportService.getMyReports(this.userId).subscribe(res =>{
      this.reports = res['data']
      console.log(this.reports);
      
    });
   }

   public gertUserById(id){
     this.userService.getUserById(id).subscribe(res =>{
      return `${res['data']['name']} ${res['data']['lastname']}`;
      
    });
   }
}
