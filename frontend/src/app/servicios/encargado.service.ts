import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalesService } from './globales.service';
import { Encargado } from '../modelos/encargado';

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {

  Encargados_API: string;

  constructor(
    private http: HttpClient,
    globales: GlobalesService

  ) {
    this.Encargados_API = globales.URL_API + 'encargados'
  }

  obtenerEncargados() {
    return this.http.get(this.Encargados_API);
  }

  obtenerEncargado(id: string) {
    return this.http.get(this.Encargados_API + `/${id}`);
  }

  insertarEncargado(objEncargado: Encargado) {
    return this.http.post(this.Encargados_API, objEncargado);
  }

  editarEncargado(objEncargado: Encargado) {
    return this.http.put(this.Encargados_API + `/${objEncargado._id}`, objEncargado);
  }

  eliminarEncargado(id: string) {
    return this.http.delete(this.Encargados_API + `/${id}`);
  }

  obtenerEstudiantes(id: string){
    return this.http.get(this.Encargados_API + `/${id}/estudiantes`);
  }

}