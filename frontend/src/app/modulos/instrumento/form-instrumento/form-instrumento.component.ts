import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Instrumento } from 'src/app/modelos/instrumento';
import { InstrumentoService } from 'src/app/servicios/instrumento.service';

@Component({
  selector: 'app-form-instrumento',
  templateUrl: './form-instrumento.component.html',
  styleUrls: ['./form-instrumento.component.css']
})
export class FormInstrumentoComponent implements OnInit {

  objInstrumento: Instrumento;
  tipoForm: string;
  nombreBoton: string;
  titulo: string

  constructor(
    private serInstrumento: InstrumentoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoForm = this.route.snapshot.data.tipoForm;
    this.objInstrumento = new Instrumento();
    this.prepararForm();

  }

  prepararForm() {
    if (this.tipoForm == 'editar') {
      this.nombreBoton = 'Actualizar';
      this.titulo = 'Actualizar Instrumento';
      this.obtenerInstrumento();
    } else if (this.tipoForm == 'insertar') {
      this.nombreBoton = 'Insertar';
      this.titulo = 'Insertar Instrumento';
    } else {
      this.obtenerInstrumento();
      this.nombreBoton = 'Regresar';
      this.titulo = 'Ver Instrumento';
    }
  }

  obtenerInstrumento() {
    let id = this.route.snapshot.params['id'];
    this.serInstrumento.obtenerInstrumento(id)
      .subscribe(res => {
        if (res['status'] == 'error') {    //si ocurre algun error en el api
          this.router.navigate(['/instrumentos']);
        } else {
          this.objInstrumento = res as Instrumento;
        }
      });
  }

  crearInstrumento() {
    this.serInstrumento.insertarInstrumento(this.objInstrumento)
      .subscribe(res => {
        this.router.navigate(['/instrumentos']);
      });
  }

  editarInstrumento() {
    this.serInstrumento.editarInstrumento(this.objInstrumento)
      .subscribe(res => {
        this.router.navigate(['/instrumentos']);
      });
  }

  SubmitForm() {
    if (this.tipoForm == 'editar') {
      this.editarInstrumento();
    } else if (this.tipoForm == 'insertar') {
      this.crearInstrumento();
    } else {
      this.router.navigate(['/instrumentos']);
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
