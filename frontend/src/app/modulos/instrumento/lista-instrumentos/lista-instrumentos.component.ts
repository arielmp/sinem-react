import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../../../modelos/instrumento';
import { InstrumentoService } from '../../../servicios/instrumento.service';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';

@Component({
  selector: 'app-lista-instrumentos',
  templateUrl: './lista-instrumentos.component.html',
  styleUrls: ['./lista-instrumentos.component.css']
})
export class ListaInstrumentosComponent implements OnInit {

  objInstrumentos: Instrumento[];
  
  constructor(
    private serInstrumento: InstrumentoService,
    public serTabla: FuncionesTablaService    
  ) { }

  
  ngOnInit() {
    this.obtenerInstrumentos(); 
    this.serTabla.ordenar();   
  }

  obtenerInstrumentos() {
    this.serInstrumento.obtenerInstrumentos()
      .subscribe(res => {
        this.objInstrumentos = res as Instrumento[];        
      });
  }

  eliminarInstrumento(objInstrumento: Instrumento) {
    if (confirm(`¿Eliminar ${objInstrumento.nombre}?`)) {
      this.serInstrumento.eliminarInstrumento(objInstrumento._id)
        .subscribe(res => {
          this.obtenerInstrumentos();
        });
    }
  }

}
