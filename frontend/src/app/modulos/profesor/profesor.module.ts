import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ProfesorRoutingModule } from './profesor-routing.module';
import {InstrumentoModule} from '../instrumento/instrumento.module';

import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';
import { FormProfesorComponent } from './form-profesor/form-profesor.component';
import { SeleccionarHorarioComponent } from './seleccionar-horario/seleccionar-horario.component';



@NgModule({
  declarations: [ListaProfesoresComponent, FormProfesorComponent, SeleccionarHorarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfesorRoutingModule,
    InstrumentoModule
  ]
})
export class ProfesorModule { }
