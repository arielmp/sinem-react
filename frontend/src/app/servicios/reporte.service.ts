import { Injectable } from '@angular/core';
import { GlobalesService } from './globales.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  Reportes_API: string;

  constructor(
    private http: HttpClient,
    globales: GlobalesService
  ) { 
    this.Reportes_API = globales.URL_API + 'reportes'
  }

  obtenerNotasEstudiante(id: string) {
    return this.http.get(this.Reportes_API + `/estudiante/${id}`);
  }

  obtenerNotasCurso(id: string) {
    return this.http.get(this.Reportes_API + `/curso/${id}`);
  }

  obtenerProfesorNotas(id: string){
    return this.http.get(this.Reportes_API + `/profesor/${id}`);
  }


}
