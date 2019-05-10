import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Usuario } from '../modelos/usuario';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioFuente = new BehaviorSubject<Usuario>(new Usuario());
  usuarioActual = this.usuarioFuente.asObservable(); 

  constructor(
    private router: Router
  ) { } 

  usuarioRegistrado(usuario: Usuario) {
    this.usuarioFuente.next(usuario);
  } 

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let tipo = this.usuarioFuente.getValue().tipo;    

    if (tipo == 'admin') {
      return true;
    } else if (tipo == 'profesor' && route.url[0]['path'] == 'calificar') {
      return true;
    } else {
      this.router.navigate(['/not-found']);
      return false;
    }
  }

}