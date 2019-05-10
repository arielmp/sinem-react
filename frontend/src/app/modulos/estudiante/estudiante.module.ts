import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { FormEstudianteComponent } from './form-estudiante/form-estudiante.component';
import {SeleccionarEstudiantesComponent} from './seleccionar-estudiantes/seleccionar-estudiantes.component';
import { EncargadoModule } from '../encargado/encargado.module';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';

@NgModule({
  declarations: [ListaEstudiantesComponent, FormEstudianteComponent, SeleccionarEstudiantesComponent, SubirImagenComponent],
  imports: [
    CommonModule,
    FormsModule,
    EstudianteRoutingModule,
    EncargadoModule
  ],
  exports: [SeleccionarEstudiantesComponent]
})
export class EstudianteModule { }
