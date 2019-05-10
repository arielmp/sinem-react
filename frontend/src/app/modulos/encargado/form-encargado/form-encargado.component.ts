import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Encargado } from 'src/app/modelos/encargado';
import { EncargadoService } from 'src/app/servicios/encargado.service';
import { Estudiante } from 'src/app/modelos/estudiante';

@Component({
  selector: 'app-form-encargado',
  templateUrl: './form-encargado.component.html',
  styleUrls: ['./form-encargado.component.css']
})
export class FormEncargadoComponent implements OnInit {

  objEncargado: Encargado;
  tipoForm: string;
  nombreBoton: string;
  titulo: string;
  objEstudiantes: Estudiante[];

  constructor(
    private serEncargado: EncargadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoForm = this.route.snapshot.data.tipoForm;
    this.objEncargado = new Encargado();
    this.objEstudiantes = [];
    this.prepararForm();
  }

  prepararForm() {
    if (this.tipoForm == 'editar') {
      this.nombreBoton = 'Actualizar';
      this.titulo = 'Actualizar Encargado';
      this.obtenerEncargado();
      this.obtenerEstudiantes();
    } else if (this.tipoForm == 'insertar') {
      this.nombreBoton = 'Insertar';
      this.titulo = 'Insertar Encargado';
    } else {
      this.obtenerEncargado();
      this.obtenerEstudiantes();
      this.nombreBoton = 'Regresar';
      this.titulo = 'Ver Encargado';
    }
  }

  obtenerEncargado() {
    let id = this.route.snapshot.params['id'];
    this.serEncargado.obtenerEncargado(id)
      .subscribe(res => {
        if (res['status'] == 'error') {    //si ocurre algun error en el api
          this.router.navigate(['/encargados']);
        } else {
          this.objEncargado = res as Encargado;
        }
      });
  }

  obtenerEstudiantes() {
    let id = this.route.snapshot.params['id'];
    this.serEncargado.obtenerEstudiantes(id).subscribe(res => {
      this.objEstudiantes = res as Estudiante[];
      console.log(this.objEstudiantes);
    });
  }

  crearEncargado() {
    this.serEncargado.insertarEncargado(this.objEncargado)
      .subscribe(res => {
        this.router.navigate(['/encargados']);
      });
  }

  editarEncargado() {
    this.serEncargado.editarEncargado(this.objEncargado)
      .subscribe(res => {
        this.router.navigate(['/encargados']);
      });
  }

  SubmitForm() {
    if (this.tipoForm == 'editar') {
      this.editarEncargado();
    } else if (this.tipoForm == 'insertar') {
      this.crearEncargado();
    } else {
      this.router.navigate(['/encargados']);
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