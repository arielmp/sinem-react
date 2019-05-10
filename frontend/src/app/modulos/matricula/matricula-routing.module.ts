import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearMatriculaComponent } from './crear-matricula/crear-matricula.component';

const routes: Routes = [
  {
    path: '',
    component: CrearMatriculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
