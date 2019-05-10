import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { EstudianteModule } from 'src/app/modulos/estudiante/estudiante.module';

import { CursoRoutingModule } from './curso-routing.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

@NgModule({
  declarations: [ListaCursosComponent, FormCursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CursoRoutingModule,
    EstudianteModule
  ]
})
export class CursoModule { }
