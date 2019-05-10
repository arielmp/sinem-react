import { Component, OnInit } from '@angular/core';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { Curso } from 'src/app/modelos/curso';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-lista-calificar-cursos',
  templateUrl: './lista-calificar-cursos.component.html',
  styleUrls: ['./lista-calificar-cursos.component.css']
})
export class ListaCalificarCursosComponent implements OnInit {

  objCursos: Curso[];
  objUsuarioIdentificado: Usuario;  

  constructor(
    private serCurso: CursoService,
    public serTabla: FuncionesTablaService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    
    this.serTabla.ordenar();
    this.auth.usuarioActual.subscribe(usuario => {
      this.objUsuarioIdentificado = usuario
      if (this.objUsuarioIdentificado.tipo == 'profesor') {
        this.obtenerCursosProfesor(usuario.profesor._id);
      } else {
        this.obtenerCursos();
      }
    });
  }

  obtenerCursos() {
    this.serCurso.obtenerCursos()
      .subscribe(res => {
        this.objCursos = res as Curso[];
      });
  }

  obtenerCursosProfesor(profesor_id: string) {
    this.serCurso.obtenerCursosProfesor(this.objUsuarioIdentificado.profesor._id)
      .subscribe(res => {
        this.objCursos = res as Curso[];
      });
  }

}
