import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Instrumento } from 'src/app/modelos/instrumento';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { InstrumentoService } from 'src/app/servicios/instrumento.service';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seleccionar-instrumentos',
  templateUrl: './seleccionar-instrumentos.component.html',
  styleUrls: ['./seleccionar-instrumentos.component.css']
})
export class SeleccionarInstrumentosComponent implements OnInit {

  objInstrumentos: Instrumento[];
  objInstrumentosSeleccionados: Instrumento[];

  @Input() tipoForm: string;
  @Output() CambiarListaEvent = new EventEmitter<Instrumento[]>();

  constructor(
    private serInstrumento: InstrumentoService,
    private serProfesor: ProfesorService,
    private serTabla: FuncionesTablaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.objInstrumentosSeleccionados = [];
    this.obtenerInstrumentos();
    this.serTabla.ordenar();

    if (this.tipoForm == 'editar' || this.tipoForm == 'ver') {
      this.obtenerInstrumentosSeleccionadosProfesor();
    }

  }

  obtenerInstrumentosSeleccionadosProfesor() {
    let id = this.route.snapshot.params['id'];
    this.serProfesor.obtenerProfesorInstrumentos(id)
      .subscribe(res => {
        this.objInstrumentosSeleccionados = res as Instrumento[];
        this.ActualizarListaInstrumentos()
      });
  }

  obtenerInstrumentos() {
    this.serInstrumento.obtenerInstrumentos()
      .subscribe(res => {
        this.objInstrumentos = res as Instrumento[];
      });
  }

  agregar(objInstrumento: Instrumento) {
    let i = this.objInstrumentos.indexOf(objInstrumento);
    this.objInstrumentos.splice(i, 1);
    this.objInstrumentosSeleccionados.push(objInstrumento);

    this.CambiarListaEvent.emit(this.objInstrumentosSeleccionados);
  }

  quitar(objInstrumento: Instrumento) {
    if (this.tipoForm != 'ver') {
      let i = this.objInstrumentosSeleccionados.indexOf(objInstrumento);
      this.objInstrumentosSeleccionados.splice(i, 1);
      this.objInstrumentos.push(objInstrumento);

      this.CambiarListaEvent.emit(this.objInstrumentosSeleccionados);
    }
  }

  //Recorre la lista de instrumentos seleccionados, busca cada uno en la lista de intrumentos general y lo elimina de esta
  ActualizarListaInstrumentos() {
    this.objInstrumentosSeleccionados.forEach(ins => {      
      let i = this.objInstrumentos.indexOf(this.objInstrumentos.find(obj => obj._id == ins._id));
      this.objInstrumentos.splice(i, 1);      
    });
  }

}
