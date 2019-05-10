import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { InstrumentoService } from 'src/app/servicios/instrumento.service';
import { Profesor } from 'src/app/modelos/profesor';
import { Instrumento } from 'src/app/modelos/instrumento';
import { Encargado } from 'src/app/modelos/encargado';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {

  objEstudiante: Estudiante;
  tipoForm: string;
  nombreBoton: string;
  titulo: string;

  objProfesores: Profesor[];
  objInstrumentos: Instrumento[];

  constructor(
    private serEstudiante: EstudianteService,
    private serInstrumento: InstrumentoService,
    private serProfesor: ProfesorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoForm = this.route.snapshot.data.tipoForm;
    this.objEstudiante = new Estudiante();
    this.objInstrumentos = [];
    this.objProfesores = [];
    this.prepararForm();
    this.obtenerDatos();
  }

  obtenerDatos() {
    // obtener prometo los intrumentos luego los profesores y luego el estudiante
    this.obtenerInstrumentos();

  }

  prepararForm() {
    if (this.tipoForm == 'editar') {
      this.nombreBoton = 'Actualizar';
      this.titulo = 'Actualizar Estudiante';
    } else if (this.tipoForm == 'insertar') {
      this.nombreBoton = 'Insertar';
      this.titulo = 'Insertar Estudiante';
    } else {
      this.nombreBoton = 'Regresar';
      this.titulo = 'Ver Estudiante';
    }
  }

  obtenerEstudiante() {
    let id = this.route.snapshot.params['id'];
    this.serEstudiante.obtenerEstudiante(id)
      .subscribe(res => {
        if (res['status'] == 'error') {    //si ocurre algun error en el api
          this.router.navigate(['/estudiantes']);
        } else {
          this.objEstudiante = res as Estudiante;

          if (this.objEstudiante.instrumento_principal) {
            this.objEstudiante.instrumento_principal = this.objInstrumentos.find(obj => obj._id === this.objEstudiante.instrumento_principal._id);
          }
          if (this.objEstudiante.profesor_tutor) {
            this.objEstudiante.profesor_tutor = this.objProfesores.find(obj => obj._id === this.objEstudiante.profesor_tutor._id);
          }

        }
      });
  }

  obtenerProfesores() {
    this.serProfesor.obtenerProfesores()
      .subscribe(res => {
        this.objProfesores = res as Profesor[];
        if (this.tipoForm != 'insertar') {
          this.obtenerEstudiante();
        }
      });
  }

  obtenerInstrumentos() {
    this.serInstrumento.obtenerInstrumentos()
      .subscribe(res => {
        this.objInstrumentos = res as Instrumento[];
        this.obtenerProfesores();
      });
  }

  crearEstudiante() {
    this.serEstudiante.insertarEstudiante(this.objEstudiante)
      .subscribe(res => {
        this.router.navigate(['/estudiantes']);
      });
  }

  editarEstudiante() {
    this.serEstudiante.editarEstudiante(this.objEstudiante)
      .subscribe(res => {
        this.router.navigate(['/estudiantes']);
      });
  }

  SubmitForm() {
    if (this.tipoForm == 'editar') {
      this.editarEstudiante();
    } else if (this.tipoForm == 'insertar') {
      this.crearEstudiante();
    } else {
      this.router.navigate(['/estudiantes']);
    }
  }

  habilitarBoton(estadoForm: boolean): boolean {
    if (this.tipoForm == 'ver') {
      return false;
    } else {
      return estadoForm;
    }
  }

  //recibe un arreglo de encargados
  //este metodo escucha el evento del componente seleccionar_estudiantes
  obtenerEncargadosSeleccionados($event: Encargado[]) {
    this.objEstudiante.encargados = $event;
  }

}
