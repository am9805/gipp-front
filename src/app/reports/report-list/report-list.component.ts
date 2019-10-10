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
  rol: string;

  constructor(
    private reportService: ReportsService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute, ) { }

  reports = [];
  ngOnInit() {
    this.rol = localStorage.getItem('userRol');
    this.path = this.activatedRoute.snapshot.url[2].path.toString();
    this.userId = localStorage.getItem('userId');

    switch (this.path) {
      case 'misReportes': {
        this.getMyReports();
        localStorage.setItem('reportResponsableRol', this.userId);
        localStorage.setItem('reportInvestigatiorRol', this.userId);

        break;
      }
      case 'todos': {
        this.getAllReports();
        break;
      }
      case 'responsable': {
        this.getResponsibleReports();
        localStorage.setItem('reportResponsableRol', this.userId);
        localStorage.setItem('reportInvestigatiorRol', '');

        break;
      }
      case 'investigador': {
        this.getInvestigatorReports();
        localStorage.setItem('reportInvestigatiorRol', this.userId);
        localStorage.setItem('reportResponsableRol', '');
        break;
      }
      default: {
        //statements; 
        break;
      }
    }


  }
  getAllReports() {
    this.reportService.getAllReports().subscribe(res => {
      this.reports = res;
    });
  }

  getResponsibleReports() {
    this.reportService.getResponsibleReports(this.userId).subscribe(res => {
      this.reports = res['data'];
    });
  }
  /**
   * TODAVIA NO ESTA
   */
  getInvestigatorReports() {
    this.reportService.getInvestigatorReports(this.userId).subscribe(res => {
      this.reports = res['data'];
    });
  }

  getMyReports() {
    this.reportService.getMyReports(this.userId).subscribe(res => {
      this.reports = res['data'];
      console.log(this.reports);
      
    });
  }

  public gertUserById(id) {
    this.userService.getUserById(id).subscribe(res => {
      return `${res['data']['name']} ${res['data']['lastname']}`;
    });
  }

  goToUpdate(id) {
    this.router.navigate([`/reporte/gestionar/${id}`]);
  }
}
