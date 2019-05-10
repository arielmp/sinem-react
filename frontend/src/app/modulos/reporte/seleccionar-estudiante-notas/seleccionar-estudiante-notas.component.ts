import { Component, OnInit } from '@angular/core';

import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';

@Component({
  selector: 'app-seleccionar-estudiante-notas',
  templateUrl: './seleccionar-estudiante-notas.component.html',
  styleUrls: ['./seleccionar-estudiante-notas.component.css']
})
export class SeleccionarEstudianteNotasComponent implements OnInit {

  objEstudiantes: Estudiante[];

  constructor(
    private serEstudiante: EstudianteService,
    public serTabla: FuncionesTablaService
  ) { }

  ngOnInit() {
    this.obtenerEstudiantes();
    this.serTabla.ordenar();
  }

  obtenerEstudiantes() {
    this.serEstudiante.obtenerEstudiantes().subscribe(res => {
      this.objEstudiantes = res as Estudiante[];
    })
  }

}
