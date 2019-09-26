import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMyReports(){
    this.router.navigate(['reporte/listar/misReportes']);
  }
  goToAllReports(){
    this.router.navigate(['reporte/listar/todos']);
  }
  goToResponsibleReports(){
    this.router.navigate(['reporte/listar/responsable']);
  }
  goToInvestigatorReports(){
    this.router.navigate(['reporte/listar/investigador']);
  }
  goToCreateReport(){
    this.router.navigate(['/reporte/añadir']);
  }

}
