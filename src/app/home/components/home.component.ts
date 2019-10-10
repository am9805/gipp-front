import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  rol: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.rol = localStorage.getItem('userRol');
  }
  goToRegister() {
    this.router.navigate(['registro']);
  }

  goToMyReports() {
    this.router.navigate(['reporte/listar/misReportes']);
  }
  goToAllReports() {
    this.router.navigate(['reporte/listar/todos']);
  }
  goToResponsibleReports() {
    this.router.navigate(['reporte/listar/responsable']);
  }
  goToInvestigatorReports() {
    this.router.navigate(['reporte/listar/investigador']);
  }
  goToCreateReport() {
    this.router.navigate(['/reporte/añadir']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
