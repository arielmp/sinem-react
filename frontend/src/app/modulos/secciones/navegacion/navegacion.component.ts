import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/modelos/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  objUsuarioIdentificado: Usuario;

  constructor(
    private auth: AuthService,
    private router: Router    
    ) { }

  ngOnInit() {
    this.auth.usuarioActual.subscribe(usuario => this.objUsuarioIdentificado = usuario);
  }

  logout(){
    this.auth.usuarioRegistrado(new Usuario());
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
