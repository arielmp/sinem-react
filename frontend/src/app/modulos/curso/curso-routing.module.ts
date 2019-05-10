import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCursosComponent
  },
  {
    path: 'crear',
    component: FormCursoComponent,
    data:{tipoForm:'insertar'}
  },
  {
    path: 'ver/:id',
    component: FormCursoComponent,
    data:{tipoForm:'ver'}
  },
  {
    path: 'editar/:id',
    component: FormCursoComponent,
    data:{tipoForm:'editar'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
