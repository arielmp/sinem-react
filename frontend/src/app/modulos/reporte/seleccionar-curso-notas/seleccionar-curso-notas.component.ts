import { Component, OnInit } from '@angular/core';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { Curso } from 'src/app/modelos/curso';

@Component({
  selector: 'app-seleccionar-curso-notas',
  templateUrl: './seleccionar-curso-notas.component.html',
  styleUrls: ['./seleccionar-curso-notas.component.css']
})
export class SeleccionarCursoNotasComponent implements OnInit {

  objCursos: Curso[];

  constructor(
    private serCurso: CursoService,
    public serTabla: FuncionesTablaService
  ) { }

  ngOnInit() {
    this.objCursos = [];
    this.obtenerCursos();
    this.serTabla.ordenar();
  }

  obtenerCursos(){
    this.serCurso.obtenerCursos().subscribe(res => {
      this.objCursos = res as Curso[];
    })
  }

}
