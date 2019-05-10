import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { EncargadoRoutingModule } from './encargado-routing.module';
import { ListaEncargadosComponent } from './lista-encargados/lista-encargados.component';
import { FormEncargadoComponent } from './form-encargado/form-encargado.component';
import { SeleccionarEncargadoComponent } from './seleccionar-encargado/seleccionar-encargado.component';

@NgModule({
  declarations: [ListaEncargadosComponent, FormEncargadoComponent, SeleccionarEncargadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    EncargadoRoutingModule
  ],
  exports: [SeleccionarEncargadoComponent]
})
export class EncargadoModule { }
