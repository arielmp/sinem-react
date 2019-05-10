import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalesService } from './globales.service';
import { Curso } from '../modelos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  Cursos_API: string;

  constructor(
    private http: HttpClient,
    globales: GlobalesService

  ) {
    this.Cursos_API = globales.URL_API + 'cursos'
  }

  obtenerCursos() {
    return this.http.get(this.Cursos_API);
  }

  obtenerCursosInactivos() {
    return this.http.get(this.Cursos_API + '/inactivos/ver');
  }

  obtenerCurso(id: string) {
    return this.http.get(this.Cursos_API + `/${id}`);
  }

  obtenerCursosProfesor(id: string){
    return this.http.get(this.Cursos_API + `/profesor/${id}`);
  }

  obtenerCursoEstudiantes(id: string){
    return this.http.get(this.Cursos_API + `/${id}/estudiantes`);
  }

  obtenerNotasCurso(id: string){
    return this.http.get(this.Cursos_API + `/${id}/notas`)
  }

  insertarCurso(objCurso: Curso) {
    return this.http.post(this.Cursos_API, objCurso);
  }

  editarCurso(objCurso: Curso) {
    return this.http.put(this.Cursos_API + `/${objCurso._id}`, objCurso);
  }

  eliminarCurso(id: string) {
    return this.http.delete(this.Cursos_API + `/${id}`);
  }
}
