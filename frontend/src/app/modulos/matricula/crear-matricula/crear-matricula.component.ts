import { Component, OnInit, Renderer2 } from '@angular/core';
import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { Curso } from 'src/app/modelos/curso';
import { CursoService } from 'src/app/servicios/curso.service';
import { Nota } from 'src/app/modelos/nota';
import { NotaService } from 'src/app/servicios/nota.service';
import { Form } from '@angular/forms';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';

@Component({
  selector: 'app-crear-matricula',
  templateUrl: './crear-matricula.component.html',
  styleUrls: ['./crear-matricula.component.css']
})
export class CrearMatriculaComponent implements OnInit {

  objEstudiantes: Estudiante[];
  objEstudianteSeleccionado: Estudiante;
  objCursos: Curso[];

  objCursosInstrumento: Curso[] = [];
  objCursosLenguaje: Curso[] = [];
  objCursosOrquesta: Curso[] = [];

  objNotaInstrumento: Nota = new Nota();
  objNotaLenguaje: Nota = new Nota();
  objNotaOrquesta: Nota = new Nota();

  objNotasOptativas: Nota[];

  constructor(
    private serEstudiante: EstudianteService,
    private serCurso: CursoService,
    private serNota: NotaService,
    public serTabla: FuncionesTablaService,
    private renderer:Renderer2
  ) { }

  ngOnInit() {
    this.obtenerEstudiantes();
    this.obtenerCursos();
  }

  obtenerEstudiantes() {
    this.serEstudiante.obtenerEstudiantes().subscribe(res => {
      this.objEstudiantes = res as Estudiante[];
    });
  }

  obtenerCursos() {
    this.serCurso.obtenerCursos().subscribe(res => {
      this.objCursos = res as Curso[];

      this.objCursos.forEach(curso => {
        if (curso.tipo == "Instrumento") {
          this.objCursosInstrumento.push(curso);
        } else if (curso.tipo == "Lenguaje") {
          this.objCursosLenguaje.push(curso);
        } else if (curso.tipo == "Orquesta") {
          this.objCursosOrquesta.push(curso);
        }
      });
    })
  }

  agregarNotas() {
    this.serNota.insertarNota(this.objNotaInstrumento).subscribe(res => console.log(res));
    this.serNota.insertarNota(this.objNotaLenguaje).subscribe(res => console.log(res));
    this.serNota.insertarNota(this.objNotaOrquesta).subscribe(res => console.log(res));
  }

  SubmitForm(form: Form) {
    console.log(this.objNotaInstrumento);
    console.log(this.objNotaLenguaje);
    console.log(this.objNotaOrquesta);
  }

  seleccionarEstudiante(est: Estudiante) {
    this.objEstudianteSeleccionado = est;
    this.objNotaInstrumento.estudiante = this.objEstudianteSeleccionado;
    this.objNotaLenguaje.estudiante = this.objEstudianteSeleccionado;
    this.objNotaOrquesta.estudiante = this.objEstudianteSeleccionado;
  }

  CursoOptativo: string = `<div class="card my-4">
  <div class="card-body my-4">
    <h5 class="card-title">Optativo</h5>
    <div class="form-group">
      <label for="orquesta">Orquesta</label>
      <select name="orquesta" class="form-control" [(ngModel)]="objNotaOrquesta.curso" #orquesta='ngModel'>
        <option *ngFor="let curso of objCursosOrquesta" [ngValue]="curso">
          {{ curso.nombre }} - {{curso.profesor.nombre}}
        </option>
      </select>
    </div>
  </div>
</div>`


  agregarOptativo(){

    


  }



}
