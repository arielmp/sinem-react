import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalesService } from './globales.service';
import { Profesor } from '../modelos/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  
  Profesores_API: string;

  constructor(
    private http: HttpClient,
    globales: GlobalesService

  ) {
    this.Profesores_API = globales.URL_API + 'profesores'
  }

  obtenerProfesores() {
    return this.http.get(this.Profesores_API);
  }

  obtenerProfesoresInactivos() {
    return this.http.get(this.Profesores_API + '/inactivos/obtener');
  }

  obtenerProfesor(id: string) {
    return this.http.get(this.Profesores_API + `/${id}`);
  }

  obtenerProfesorInstrumentos(id: string){
    return this.http.get(this.Profesores_API + `/${id}/instrumentos`);    
  }

  obtenerProfesorHorario(id: string){
    return this.http.get(this.Profesores_API + `/${id}/horario`);    
  }

  insertarProfesor(objProfesor: Profesor) {    
    return this.http.post(this.Profesores_API, objProfesor);
  }

  editarProfesor(objProfesor: Profesor) {
    return this.http.put(this.Profesores_API + `/${objProfesor._id}`, objProfesor);
  }

  eliminarProfesor(id: string) {
    return this.http.delete(this.Profesores_API + `/${id}`);
  }
  
}