import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalesService } from './globales.service';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  Usuarios_API: string;

  constructor(
    private http: HttpClient,
    globales: GlobalesService

  ) {
    this.Usuarios_API = globales.URL_API + 'usuarios'
  }

  obtenerUsuarios() {
    return this.http.get(this.Usuarios_API);
  }

  obtenerUsuario(id: string) {
    return this.http.get(this.Usuarios_API + `/${id}`);
  }

  insertarUsuario(objUsuario: Usuario) {
    return this.http.post(this.Usuarios_API, objUsuario);
  }

  editarUsuario(objUsuario: Usuario) {
    return this.http.put(this.Usuarios_API + `/${objUsuario._id}`, objUsuario);
  }

  eliminarUsuario(id: string) {
    return this.http.delete(this.Usuarios_API + `/${id}`);
  }  

  identificarUsuario(objUsuario: Usuario){
    return this.http.post(this.Usuarios_API + '/login',objUsuario);
  }

}