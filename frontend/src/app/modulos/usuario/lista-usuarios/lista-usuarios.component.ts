import { Component, OnInit } from '@angular/core';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  objUsuarios: Usuario[];

  constructor(
    private serUsuario: UsuarioService,
    public serTabla: FuncionesTablaService
  ) { }

  ngOnInit() {
    this.obtenerUsuarios();
    this.serTabla.ordenar();
  }

  obtenerUsuarios(){
    this.serUsuario.obtenerUsuarios()
    .subscribe(res => {
      this.objUsuarios = res as Usuario[];        
    });
  }

  eliminarUsuario(objUsuario: Usuario) {
    if (confirm(`¿Eliminar ${objUsuario.nombre}?`)) {
      this.serUsuario.eliminarUsuario(objUsuario._id)
        .subscribe(res => {
          this.obtenerUsuarios();
        });
    }
  }

}
