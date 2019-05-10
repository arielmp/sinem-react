import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  objUsuario: Usuario;

  constructor(
    private serUsuario: UsuarioService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.objUsuario = new Usuario();
  }

  login() {    
    this.serUsuario.identificarUsuario(this.objUsuario).subscribe(res => {
      if (res['status'] == 'exito') {
        this.objUsuario = res['usuario'] as Usuario;
        this.auth.usuarioRegistrado(this.objUsuario);
        localStorage.setItem('usuario', JSON.stringify(this.objUsuario)); // guardar usuario en local storage
        localStorage.setItem('token', res['token']);

        console.log(this.objUsuario);
        this.router.navigate(['/']);
      } else {
        console.log(res);
      }
    });
  }

}
