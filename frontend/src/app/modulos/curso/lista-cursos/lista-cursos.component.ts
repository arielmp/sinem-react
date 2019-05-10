import { Component, OnInit } from '@angular/core';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { Curso } from 'src/app/modelos/curso';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  objCursos: Curso[];
  inactivos: boolean = false;

  constructor(
    private serCurso: CursoService,
    public serTabla: FuncionesTablaService

  ) { }

  ngOnInit() {
    this.serTabla.ordenar();


    if (this.inactivos) {
      this.obtenerCursosInactivos();
    } else {
      this.obtenerCursos();
    }
  }

  obtenerCursos() {
    this.serCurso.obtenerCursos()
      .subscribe(res => {
        this.objCursos = res as Curso[];
      });
  }

  obtenerCursosInactivos() {
    this.inactivos = !this.inactivos;
    let boton = document.getElementById('botonInactivos');

    if (this.inactivos) {
      this.serCurso.obtenerCursosInactivos()
        .subscribe(res => {
          this.objCursos = res as Curso[];
          boton.innerHTML = "Ver Activos"
        });
    }else{
      this.obtenerCursos();
      boton.innerHTML = "Ver Inactivos"
    }
  }

  eliminarCurso(objCurso: Curso) {
    if (confirm(`¿Eliminar ${objCurso.nombre}?`)) {
      this.serCurso.eliminarCurso(objCurso._id)
        .subscribe(res => {
          this.obtenerCursos();
        });
    }
  }

}
