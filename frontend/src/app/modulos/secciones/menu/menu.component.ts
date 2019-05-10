import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/modelos/usuario';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  objUsuarioIdentificado: Usuario;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.usuarioActual.subscribe(usuario => this.objUsuarioIdentificado = usuario);
  }

}
