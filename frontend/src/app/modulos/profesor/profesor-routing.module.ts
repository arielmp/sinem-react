import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';
import { FormProfesorComponent } from './form-profesor/form-profesor.component';
import { SeleccionarHorarioComponent } from './seleccionar-horario/seleccionar-horario.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProfesoresComponent
  },
  {
    path: 'crear',
    component: FormProfesorComponent,
    data:{tipoForm:'insertar'}
  },
  {
    path: 'ver/:id',
    component: FormProfesorComponent,
    data:{tipoForm:'ver'}
  },
  {
    path: 'editar/:id',
    component: FormProfesorComponent,
    data:{tipoForm:'editar'}
  },
  {
    path: 'horario',
    component: SeleccionarHorarioComponent
  },
  {
    path: 'horario/:id',
    component: SeleccionarHorarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
