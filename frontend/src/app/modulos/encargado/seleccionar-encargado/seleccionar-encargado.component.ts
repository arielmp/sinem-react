import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { Encargado } from 'src/app/modelos/encargado';
import { EncargadoService } from 'src/app/servicios/encargado.service';

import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from 'src/app/servicios/estudiante.service';


@Component({
  selector: 'app-seleccionar-encargado',
  templateUrl: './seleccionar-encargado.component.html',
  styleUrls: ['./seleccionar-encargado.component.css']
})
export class SeleccionarEncargadoComponent implements OnInit {

  objEncargados: Encargado[];
  objEncargadosSeleccionados: Encargado[];
  objVerEncargado: Encargado;
  @Input() tipoForm: string;
  @Output() CambiarListaEvent = new EventEmitter<Encargado[]>();


  constructor(
    private serEncargado: EncargadoService,
    private serEstudiante: EstudianteService,
    public serTabla: FuncionesTablaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.objVerEncargado = new Encargado();
    this.objEncargadosSeleccionados = [];
    this.obtenerEncargados();
    this.serTabla.ordenar();  
  }

  obtenerEncargadosSeleccionadosEstudiante() {
    let id = this.route.snapshot.params['id'];
    this.serEstudiante.obtenerEncargados(id)
      .subscribe(res => {
        this.objEncargadosSeleccionados = res as Encargado[];
        this.ActualizarListaEncargados()
      });
  }

  obtenerEncargados() {
    this.serEncargado.obtenerEncargados()
      .subscribe(res => {
        this.objEncargados = res as Encargado[];
        if (this.tipoForm == 'editar' || this.tipoForm == 'ver') {
          this.obtenerEncargadosSeleccionadosEstudiante();
        }
      });
  }

  //Recorre la lista de encargados seleccionados, busca cada uno en la lista de encargados general y lo elimina de esta
  ActualizarListaEncargados() {
    try {
      this.objEncargadosSeleccionados.forEach(enc => {
        let i = this.objEncargados.indexOf(this.objEncargados.find(obj => obj._id == enc._id));
        this.objEncargados.splice(i, 1);
      });
    } catch (err) {
      console.log(err);
    }
  }

  agregar(objEncargado: Encargado) {
    let i = this.objEncargados.indexOf(objEncargado);
    this.objEncargados.splice(i, 1);
    this.objEncargadosSeleccionados.push(objEncargado);

    this.CambiarListaEvent.emit(this.objEncargadosSeleccionados);
  }

  quitar(objEncargado: Encargado) {
    if (this.tipoForm != 'ver') {
      let i = this.objEncargadosSeleccionados.indexOf(objEncargado);
      this.objEncargadosSeleccionados.splice(i, 1);
      this.objEncargados.push(objEncargado);

      this.CambiarListaEvent.emit(this.objEncargadosSeleccionados);
    }
  }

  verEncargado(encargado: Encargado){
    this.objVerEncargado = encargado;
  }

}
