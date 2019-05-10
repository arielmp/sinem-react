import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instrumento } from '../modelos/instrumento';
import { GlobalesService } from './globales.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  Instrumentos_API: string;

  constructor(
    private http: HttpClient,
    globales: GlobalesService

  ) {
    this.Instrumentos_API = globales.URL_API + 'instrumentos'
  }

  obtenerInstrumentos() {
    return this.http.get(this.Instrumentos_API);
  }

  obtenerInstrumento(id: string) {
    return this.http.get(this.Instrumentos_API + `/${id}`);
  }

  insertarInstrumento(objInstrumento: Instrumento) {
    return this.http.post(this.Instrumentos_API, objInstrumento);
  }

  editarInstrumento(objInstrumento: Instrumento) {
    return this.http.put(this.Instrumentos_API + `/${objInstrumento._id}`, objInstrumento);
  }

  eliminarInstrumento(id: string) {
    return this.http.delete(this.Instrumentos_API + `/${id}`);
  }

  revisarExistente(nombre: string){
    return this.http.get(this.Instrumentos_API + `/existe/${nombre}`);
  }


}