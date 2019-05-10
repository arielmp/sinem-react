import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Curso } from 'src/app/modelos/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { NotaService } from 'src/app/servicios/nota.service';
import { Estudiante } from 'src/app/modelos/estudiante';
import { Profesor } from 'src/app/modelos/profesor';
import { Nota } from 'src/app/modelos/nota';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {

  objCurso: Curso;
  tipoForm: string;
  nombreBoton: string;
  titulo: string;
  objProfesores: Profesor[];  

  objEstudiantesEditar: Estudiante[];

  constructor(
    private serCurso: CursoService,
    private serProfesor: ProfesorService,
    private serNota: NotaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoForm = this.route.snapshot.data.tipoForm;
    this.objCurso = new Curso();    
    //obtener primero la lista de profesores y luego el curso
    this.obtenerProfesores();
    this.prepararForm();
  }

  prepararForm() {
    if (this.tipoForm == 'editar') {
      this.nombreBoton = 'Actualizar';
      this.titulo = 'Actualizar Curso';
      this.obtenerCurso();
    } else if (this.tipoForm == 'insertar') {
      this.nombreBoton = 'Insertar';
      this.titulo = 'Insertar Curso';
    } else {
      this.obtenerCurso();
      this.nombreBoton = 'Regresar';
      this.titulo = 'Ver Curso';
    }
  }

  obtenerCurso() {
    let id = this.route.snapshot.params['id'];
    this.serCurso.obtenerCurso(id)
      .subscribe(res => {
        if (res['status'] == 'error') {    //si ocurre algun error en el api
          this.router.navigate(['/cursos']);
        } else {
          this.objCurso = res as Curso;     
          this.objEstudiantesEditar = this.objCurso.estudiantes;
          if(this.objCurso.profesor){
            this.objCurso.profesor = this.objProfesores.find(obj => obj._id === this.objCurso.profesor._id);
          }
        }
      });
  }

  obtenerProfesores(){
    this.serProfesor.obtenerProfesores()
    .subscribe(res => {
      this.objProfesores = res as Profesor[];
      if (this.tipoForm != 'insertar'){
        this.obtenerCurso();
      }

    });
  }

  crearCurso() {    
    //recorrer estudiantes y crear notas en objCurso.notas
    this.objCurso.estudiantes.forEach(estudiante => {
      let nota = new Nota();
      nota.estudiante = estudiante;
      this.objCurso.notas.push(nota);
    });
    
    this.serCurso.insertarCurso(this.objCurso)
      .subscribe(res => {
        this.router.navigate(['/cursos']);
      });
  }

  // falta: agregar notas de estudiantes nuevos
  // falta: revisar si ya existe las notas y no crear nuevas
  editarCurso() {      

    this.serCurso.editarCurso(this.objCurso)
      .subscribe(res => {
        this.router.navigate(['/cursos']);
      });
  }

  SubmitForm() {
    if (this.tipoForm == 'editar') {
      this.editarCurso();
    } else if (this.tipoForm == 'insertar') {
      this.crearCurso();
    } else {
      this.router.navigate(['/cursos']);
    }
  }

  habilitarBoton(estadoForm: boolean): boolean {
    if (this.tipoForm == 'ver') {
      return false;
    } else {
      return estadoForm;
    }
  }

  //recibe un arreglo de estudiantes
  //este metodo escucha el evento del componente seleccionar_estudiantes
  obtenerEstudiantesSeleccionados($event: Estudiante[]){
    this.objCurso.estudiantes = $event;    
  }


}
