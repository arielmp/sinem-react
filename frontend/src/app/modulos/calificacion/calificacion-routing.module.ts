import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCalificarCursosComponent } from './lista-calificar-cursos/lista-calificar-cursos.component';
import { FormCalificarCursoComponent } from './form-calificar-curso/form-calificar-curso.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCalificarCursosComponent    
  },
  {
    path: ':id',
    component: FormCalificarCursoComponent,
    data:{tipoForm:'calificar'}
  },
  {
    path: 'ver/:id',
    component: FormCalificarCursoComponent,
    data:{tipoForm:'ver'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalificacionRoutingModule { }
