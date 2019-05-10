import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Estudiante } from 'src/app/modelos/estudiante';
import { Nota } from 'src/app/modelos/nota';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { ReporteService } from 'src/app/servicios/reporte.service';


@Component({
  selector: 'app-reporte-notas-estudiante',
  templateUrl: './reporte-notas-estudiante.component.html',
  styleUrls: ['./reporte-notas-estudiante.component.css']
})
export class ReporteNotasEstudianteComponent implements OnInit {

  
  objEstudiante: Estudiante;
  objNotas: Nota[];
  promediototal: number = 0;
  numerocursos: number = 0;

  constructor(
    private serEstudiante: EstudianteService,
    private serReporte: ReporteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerEstudiante();
    this.obtenerNotas()
  }


  obtenerEstudiante() {
    let id = this.route.snapshot.params['id'];
    this.serEstudiante.obtenerEstudiante(id)
      .subscribe(res => {
        this.objEstudiante = res as Estudiante;
      });
  }

  obtenerNotas(){
    let id = this.route.snapshot.params['id'];
    this.serReporte.obtenerNotasEstudiante(id).subscribe(res =>{
      this.objNotas = res as Nota[]
    });
  } 

  regresar() {
    this.router.navigate(['/reportes/notas/estudiante']);
  }

  formatoNota(nota: string) {
    let notaNum = parseFloat(nota);
    if (notaNum >= 0) {
      if (notaNum >= 90) return 'Aprobado con Excelencia';
      if (notaNum >= 80 && notaNum < 90) return 'Aprobado';
      if (notaNum >= 70 && notaNum < 80) return 'Aprobado Condicional';
      if (notaNum < 70) return 'Insuficiente';
    } else {
      return nota;
    }
  }


  promedioNota(notaI: string, notaII: string) {
    let notaInum = parseFloat(notaI);
    let notaIInum = parseFloat(notaII);

    if (notaInum >= 0 || notaIInum >= 0) {
      let promedio: number;

      if (notaInum >= 0 && notaIInum >= 0) {
        promedio = (notaInum + notaIInum) / 2;
      } else if (notaInum >= 0) {
        promedio = notaInum;
      } else if (notaIInum >= 0) {
        promedio = notaIInum;
      }

      this.numerocursos++;

      this.promediototal = this.promediototal + promedio

      return promedio;
    } else {
      return '';
    }
  }

  calcularPromedioTotal() {
    if (this.numerocursos > 0) {
      return (this.promediototal / this.numerocursos).toFixed(1);
    }
    return '';
  }


  
  exportar() {
    document.getElementById('botones').style.display='none';
    window.print();
    document.getElementById('botones').style.display='block';    
  }



}
