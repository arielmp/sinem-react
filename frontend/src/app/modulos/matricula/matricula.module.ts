import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MatriculaRoutingModule } from './matricula-routing.module';
import { CrearMatriculaComponent } from './crear-matricula/crear-matricula.component';

@NgModule({
  declarations: [CrearMatriculaComponent],
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    FormsModule
  ]
})
export class MatriculaModule { }
