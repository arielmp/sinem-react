import { Component, OnInit } from '@angular/core';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { Estudiante } from 'src/app/modelos/estudiante';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {

  objEstudiantes: Estudiante[];
  inactivos: boolean = false;

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
    });
  }

  obtenerEstudiantesInactivos() {
    this.inactivos = !this.inactivos;
    let boton = document.getElementById("botonInactivos");

    if (this.inactivos) {
      this.serEstudiante.obtenerEstudiantesInactivos().subscribe(res => {
        this.objEstudiantes = res as Estudiante[];
        boton.innerHTML = "Ver Activos";
      })
    } else {
      this.obtenerEstudiantes();
      boton.innerHTML = "Ver Inactivos";
    }
  }

  eliminarEstudiante(objEstudiante: Estudiante) {
    if (confirm(`¿Eliminar ${objEstudiante.nombre}?`)) {
      this.serEstudiante.eliminarEstudiante(objEstudiante._id)
        .subscribe(res => {
          this.obtenerEstudiantes();
        });
    }
  }

}
