import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalesService } from './globales.service';
import { Estudiante } from '../modelos/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  Estudiantes_API: string;

  constructor(
    private http: HttpClient,
    globales: GlobalesService

  ) {
    this.Estudiantes_API = globales.URL_API + 'estudiantes'
  }

  obtenerEstudiantes() {
    return this.http.get(this.Estudiantes_API);
  }

  obtenerEstudiantesInactivos() {
    return this.http.get(this.Estudiantes_API + '/inactivos/obtener');
  }

  obtenerEstudiantesTodos() {
    return this.http.get(this.Estudiantes_API + '/todos/obtener');
  }  

  obtenerEstudiante(id: string) {
    return this.http.get(this.Estudiantes_API + `/${id}`);
  }

  insertarEstudiante(objEstudiante: Estudiante) {
    return this.http.post(this.Estudiantes_API, objEstudiante);
  }

  editarEstudiante(objEstudiante: Estudiante) {
    return this.http.put(this.Estudiantes_API + `/${objEstudiante._id}`, objEstudiante);
  }

  eliminarEstudiante(id: string) {
    return this.http.delete(this.Estudiantes_API + `/${id}`);
  }

  obtenerEncargados(id: string) {
    return this.http.get(this.Estudiantes_API + `/${id}/encargados`);
  }

  guardarImagen(imagen: File){
    const fd = new FormData();
    fd.append('imagen',imagen,imagen.name);
    return this.http.post('/',fd);
  }


}
