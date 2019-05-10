import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/modelos/profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';

@Component({
  selector: 'app-seleccionar-profesor-notas',
  templateUrl: './seleccionar-profesor-notas.component.html',
  styleUrls: ['./seleccionar-profesor-notas.component.css']
})
export class SeleccionarProfesorNotasComponent implements OnInit {

  objProfesores: Profesor[];

  constructor(
    private serProfesor: ProfesorService,
    public serTabla: FuncionesTablaService
    ) { }

  ngOnInit() {
    this.obtenerProfesores();
  }

  obtenerProfesores(){
    this.serProfesor.obtenerProfesores().subscribe(res => {
      this.objProfesores = res as Profesor[];
    });
  }

}
