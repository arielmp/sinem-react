import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

import { CursoService } from 'src/app/servicios/curso.service';
import { ReporteService } from 'src/app/servicios/reporte.service';
import { Nota } from 'src/app/modelos/nota';
import { Curso } from 'src/app/modelos/curso';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';

@Component({
  selector: 'app-reporte-curso-notas',
  templateUrl: './reporte-curso-notas.component.html',
  styleUrls: ['./reporte-curso-notas.component.css']
})
export class ReporteCursoNotasComponent implements OnInit {

  objNotas: Nota[];
  objCurso: Curso;
  

  constructor(
    private serCurso: CursoService,
    private serReporte: ReporteService,
    private route: ActivatedRoute,
    private router: Router,
    public serTabla: FuncionesTablaService
  ) { }


  ngOnInit() {
    this.serTabla.ordenar();
    this.objCurso = new Curso();
    this.obtenerCurso();
    this.obtenerNotas();
  }

  obtenerCurso(){
    let id = this.route.snapshot.params['id'];
    this.serCurso.obtenerCurso(id).subscribe(res => {
      this.objCurso = res as Curso;
    })
  }

  obtenerNotas(){
    let id = this.route.snapshot.params['id'];
    this.serReporte.obtenerNotasCurso(id).subscribe(res =>{
      this.objNotas = res as Nota[];
    });
  } 

  regresar() {
    this.router.navigate(['/reportes/notas/curso']);
  }

  formatoNota(nota: string) {
    let notaNum = parseFloat(nota);
    if (notaNum >= 0) {
      if (notaNum >= 90) return 'AE';
      if (notaNum >= 80 && notaNum < 90) return 'A';
      if (notaNum >= 70 && notaNum < 80) return 'AC';
      if (notaNum < 70) return 'I';
    } else {
      return '';
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

      return promedio;
    } else {
      return '';
    }
  }

  exportar() {
    document.getElementById('botones').style.display='none';
    window.print();
    document.getElementById('botones').style.display='block';   
  }

}
