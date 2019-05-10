import { Component, OnInit } from '@angular/core';
import { FuncionesTablaService } from 'src/app/servicios/funciones-tabla.service';
import { EncargadoService } from 'src/app/servicios/encargado.service';
import { Encargado } from 'src/app/modelos/encargado';

@Component({
  selector: 'app-lista-encargados',
  templateUrl: './lista-encargados.component.html',
  styleUrls: ['./lista-encargados.component.css']
})
export class ListaEncargadosComponent implements OnInit {

  objEncargados: Encargado[];

  constructor(
    private serEncargado: EncargadoService,
    public serTabla: FuncionesTablaService
  ) { }

  ngOnInit() {
    this.obtenerEncargados();
    this.serTabla.ordenar();
  }

  obtenerEncargados(){
    this.serEncargado.obtenerEncargados()
    .subscribe(res => {
      this.objEncargados = res as Encargado[];        
    });
  }

  eliminarEncargado(objEncargado: Encargado) {    
    if (confirm(`¿Eliminar ${objEncargado.nombre}?`)) {
      this.serEncargado.eliminarEncargado(objEncargado._id)
        .subscribe(res => {
          this.obtenerEncargados();
        });
    }
  }

}
