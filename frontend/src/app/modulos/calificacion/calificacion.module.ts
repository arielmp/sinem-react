import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CalificacionRoutingModule } from './calificacion-routing.module';
import { ListaCalificarCursosComponent } from './lista-calificar-cursos/lista-calificar-cursos.component';
import { FormCalificarCursoComponent } from './form-calificar-curso/form-calificar-curso.component';


@NgModule({
  declarations: [ListaCalificarCursosComponent, FormCalificarCursoComponent],
  imports: [
    CommonModule,
    CalificacionRoutingModule,
    FormsModule
  ]
})
export class CalificacionModule { }
