import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Profesor } from 'src/app/modelos/profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  objUsuario: Usuario;
  tipoForm: string;
  nombreBoton: string;
  titulo: string;
  objProfesores: Profesor[];

  constructor(
    private serUsuario: UsuarioService,
    private serProfesor: ProfesorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoForm = this.route.snapshot.data.tipoForm;
    this.objUsuario = new Usuario();
    this.prepararForm();
    this.obtenerProfesores();
  }

  prepararForm() {
    if (this.tipoForm == 'editar') {
      this.nombreBoton = 'Actualizar';
      this.titulo = 'Actualizar Usuario';      
    } else if (this.tipoForm == 'insertar') {
      this.nombreBoton = 'Insertar';
      this.titulo = 'Insertar Usuario';
    } else {      
      this.nombreBoton = 'Regresar';
      this.titulo = 'Ver Usuario';
    }
  }

  obtenerProfesores() {
    this.serProfesor.obtenerProfesores().subscribe(res => {
      this.objProfesores = res as Profesor[];
      if (this.tipoForm != 'insertar') {
        this.obtenerUsuario()
      }
    });
  }

  obtenerUsuario() {
    let id = this.route.snapshot.params['id'];
    this.serUsuario.obtenerUsuario(id)
      .subscribe(res => {
        if (res['status'] == 'error') {    //si ocurre algun error en el api
          this.router.navigate(['/usuarios']);
        } else {
          this.objUsuario = res as Usuario;

          if (this.objUsuario.tipo == 'profesor') {            
            this.objUsuario.profesor = this.objProfesores.find(obj => obj._id === this.objUsuario.profesor._id);
          }
        }
      });
  }

  crearUsuario() {
    this.serUsuario.insertarUsuario(this.objUsuario)
      .subscribe(res => {
        this.router.navigate(['/usuarios']);
      });
  }

  editarUsuario() {
    this.serUsuario.editarUsuario(this.objUsuario)
      .subscribe(res => {
        this.router.navigate(['/usuarios']);
      });
  }

  SubmitForm() {
    if (this.tipoForm == 'editar') {
      this.editarUsuario();
    } else if (this.tipoForm == 'insertar') {
      this.crearUsuario();
    } else {
      this.router.navigate(['/usuarios']);
    }
  }

  habilitarBoton(estadoForm: boolean): boolean {
    if (this.tipoForm == 'ver') {
      return false;
    } else {
      return estadoForm;
    }
  }



}
