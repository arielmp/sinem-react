import { Component, OnInit } from '@angular/core';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { Profesor } from 'src/app/modelos/profesor';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {

  objProfesores: Profesor[];
  inactivos: boolean = false;

  constructor(
    private serProfesor: ProfesorService,
    public serTabla: FuncionesTablaService,    
  ) { }

  ngOnInit() {
    this.obtenerProfesores();
    this.serTabla.ordenar();
  }

  obtenerProfesores() {
    this.serProfesor.obtenerProfesores()
      .subscribe(res => {
        this.objProfesores = res as Profesor[];
      });
  }

  obtenerProfesoresInactivos() {
    this.inactivos = !this.inactivos;
    let boton = document.getElementById('botonInactivos');

    if (this.inactivos) {
      this.serProfesor.obtenerProfesoresInactivos()
        .subscribe(res => {
          this.objProfesores = res as Profesor[];
          boton.innerHTML = "Ver Activos"
        });
    } else {
      this.obtenerProfesores();
      boton.innerHTML = "Ver Inactivos"
    }
  }

  eliminarProfesor(objProfesor: Profesor) {
    if (confirm(`¿Eliminar ${objProfesor.nombre}?`)) {
      this.serProfesor.eliminarProfesor(objProfesor._id)
        .subscribe(res => {
          this.obtenerProfesores();
        });
    }
  }



}
