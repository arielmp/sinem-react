import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/modelos/nota';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { ReporteService } from 'src/app/servicios/reporte.service';
import { Profesor } from 'src/app/modelos/profesor';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';

@Component({
  selector: 'app-reporte-notas-profesor',
  templateUrl: './reporte-notas-profesor.component.html',
  styleUrls: ['./reporte-notas-profesor.component.css']
})
export class ReporteNotasProfesorComponent implements OnInit {

  objNotas: Nota[];
  objProfesor: Profesor;
  profesorId: string;

  constructor(
    private serProfesor: ProfesorService,
    private serReporte: ReporteService,
    private route: ActivatedRoute,
    private router: Router,
    public serTabla: FuncionesTablaService
  ) { }

  ngOnInit() {
    this.serTabla.ordenar();
    this.profesorId = this.route.snapshot.params['id'];
    this.obtenerProfesor();
    this.obtenerNotas();
  }

  obtenerProfesor(){
    this.serProfesor.obtenerProfesor(this.profesorId).subscribe(res => {
      this.objProfesor = res as Profesor;
    });      
  }

  obtenerNotas(){    
    this.serReporte.obtenerProfesorNotas(this.profesorId).subscribe(res => {
      this.objNotas = res as Nota[];
    });
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

  regresar() {
    this.router.navigate(['/reportes/notas/profesor']);
  }

  exportar() {
    document.getElementById('botones').style.display='none';
    window.print();
    document.getElementById('botones').style.display='block';   
  }

}
