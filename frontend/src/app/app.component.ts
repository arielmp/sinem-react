import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';
import { Usuario } from './modelos/usuario';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  objUsuarioActual: Usuario;

  constructor(
   private auth: AuthService
  ) { }

  ngOnInit() {

    let usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario){
      this.objUsuarioActual = usuario as Usuario;
      this.auth.usuarioRegistrado(this.objUsuarioActual);
    }else{
      console.log('no existe');
    }
    
  }
}