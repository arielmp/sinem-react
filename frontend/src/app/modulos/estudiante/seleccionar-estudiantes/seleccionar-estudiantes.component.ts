import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from 'src/app/modelos/estudiante';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seleccionar-estudiantes',
  templateUrl: './seleccionar-estudiantes.component.html',
  styleUrls: ['./seleccionar-estudiantes.component.css']
})
export class SeleccionarEstudiantesComponent implements OnInit {

  objEstudiantes: Estudiante[];
  objEstudiantesSeleccionados: Estudiante[];

  @Input() tipoForm: string;
  @Output() CambiarListaEvent = new EventEmitter<Estudiante[]>();

  constructor(
    private serEstudiante: EstudianteService,
    private serCurso: CursoService,
    private serTabla: FuncionesTablaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.objEstudiantesSeleccionados = [];
    this.obtenerEstudiantes();
    this.serTabla.ordenar();  
  }

  obtenerEstudiantesSeleccionadosCurso() {
    let id = this.route.snapshot.params['id'];
    this.serCurso.obtenerCursoEstudiantes(id)
      .subscribe(res => {
        this.objEstudiantesSeleccionados = res as Estudiante[];
        this.ActualizarListaEstudiantes()
      });
  }

  obtenerEstudiantes() {
    this.serEstudiante.obtenerEstudiantes()
      .subscribe(res => {
        this.objEstudiantes = res as Estudiante[];
        if (this.tipoForm == 'editar' || this.tipoForm == 'ver') {
          this.obtenerEstudiantesSeleccionadosCurso();
        }
      });
  }

  //Recorre la lista de instrumentos seleccionados, busca cada uno en la lista de intrumentos general y lo elimina de esta
  ActualizarListaEstudiantes() {
    try {
      this.objEstudiantesSeleccionados.forEach(ins => {
        let i = this.objEstudiantes.indexOf(this.objEstudiantes.find(obj => obj._id == ins._id));
        this.objEstudiantes.splice(i, 1);        
      });
    } catch (err) {
      console.log(err);
    }

  }

  agregar(objEstudiante: Estudiante) {
    let i = this.objEstudiantes.indexOf(objEstudiante);
    this.objEstudiantes.splice(i, 1);
    this.objEstudiantesSeleccionados.push(objEstudiante);

    this.CambiarListaEvent.emit(this.objEstudiantesSeleccionados);
  }

  quitar(objEstudiante: Estudiante) {
    console.log(objEstudiante);
    if (this.tipoForm != 'ver') {
      let i = this.objEstudiantesSeleccionados.indexOf(objEstudiante);
      this.objEstudiantes.push(objEstudiante);
      this.objEstudiantesSeleccionados.splice(i, 1);      
      console.log(this.objEstudiantesSeleccionados.length);

      this.CambiarListaEvent.emit(this.objEstudiantesSeleccionados);
    }
  }

}
