import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalesService } from './globales.service';
import { Nota } from '../modelos/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  Notas_API: string;

  constructor(
    private http: HttpClient,
    globales: GlobalesService

  ) {
    this.Notas_API = globales.URL_API + 'notas'
  }

  obtenerNotas() {
    return this.http.get(this.Notas_API);
  }

  insertarNota(objNota: Nota) {
    return this.http.post(this.Notas_API, objNota);
  }

  editarNota(objNota: Nota) {
    return this.http.put(this.Notas_API + `/${objNota._id}`, objNota);
  }

  eliminarNota(id: string) {
    return this.http.delete(this.Notas_API + `/${id}`);
  }

  //obtiene el id del curso
  obtenerNotasCurso(id: string) {
    return this.http.get(this.Notas_API + `/curso/${id}`);
  } 
  
  buscarNotaEstudianteCurso(estudianteId: string, cursoId: string) {
    return this.http.get(this.Notas_API + `/curso/${cursoId}/estudiante/${estudianteId}`);
  }
}
