import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../modelos/estudiante';
import { EstudianteService } from '../servicios/estudiante.service';
import { Curso } from '../modelos/curso';
import { CursoService } from '../servicios/curso.service';
import { Nota } from '../modelos/nota';
import { NotaService } from '../servicios/nota.service';
import { Profesor } from '../modelos/profesor';
import { ProfesorService } from '../servicios/profesor.service';



@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.css']
})
export class ProcedimientosComponent implements OnInit {

  objEstudiantes: Estudiante[];
  objCursos: Curso[];
  objNotas: Nota[];
  objProfesores: Profesor[];

  constructor(
    private serEstudiante: EstudianteService,
    private serCurso: CursoService,
    private serNota: NotaService,
    private serProfesor: ProfesorService
    ) { }

  ngOnInit() {
   // this.obtenerEstudiantes();
    //this.obtenerCursos();
    this.obtenerNotas();
   // this.obtenerProfesores();
  }

  obtenerEstudiantes() {
    this.serEstudiante.obtenerEstudiantesTodos().subscribe(res => {
      this.objEstudiantes = res as Estudiante[];
      console.log(this.objEstudiantes);
    })
  }

  obtenerCursos(){
    this.serCurso.obtenerCursos().subscribe(res => {
      this.objCursos = res as Curso[];
      console.log(this.objCursos);
    })
  }

  obtenerNotas(){
    this.serNota.obtenerNotas().subscribe(res => {
      this.objNotas = res as Nota[];
      console.log(this.objNotas);
    })
  }

  obtenerProfesores(){
    this.serProfesor.obtenerProfesores().subscribe(res => {
      this.objProfesores = res as Profesor[];
      console.log(this.objProfesores);
    })
  }


  ArreglarFechas() {
    this.objEstudiantes.forEach(estudiante => {
      let fecha = estudiante.fecha_nacimiento;
      if (fecha) {
        let dia = fecha.substring(0, 2);
        let mes = fecha.substring(3, 5);
        let ano = fecha.substring(6, fecha.length);
        fecha = ano + '-' + mes + '-' + dia;        
        estudiante.fecha_nacimiento = fecha;
        console.log(estudiante.fecha_nacimiento);
        this.serEstudiante.editarEstudiante(estudiante).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

  ArreglarSexo(){
    this.objEstudiantes.forEach(estudiante => {
        estudiante.sexo = estudiante.sexo.toUpperCase()
        this.serEstudiante.editarEstudiante(estudiante).subscribe(res => console.log(res));
    });    
  }

  AgregarProfesorTutor(){
    this.objNotas.forEach(nota => {
      if( nota.curso.tipo == 'Instrumento'){
        nota.estudiante.profesor_tutor = nota.curso.profesor
        //console.log(nota.estudiante);
        this.serEstudiante.editarEstudiante(nota.estudiante).subscribe(res => console.log(res));
      }
      
    });
  }

}
