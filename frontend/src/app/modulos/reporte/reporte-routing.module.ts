import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { ReporteNotasEstudianteComponent } from './reporte-notas-estudiante/reporte-notas-estudiante.component';
import { SeleccionarEstudianteNotasComponent } from './seleccionar-estudiante-notas/seleccionar-estudiante-notas.component';
import { SeleccionarCursoNotasComponent } from './seleccionar-curso-notas/seleccionar-curso-notas.component';
import { ReporteCursoNotasComponent } from './reporte-curso-notas/reporte-curso-notas.component';
import { SeleccionarProfesorNotasComponent } from './seleccionar-profesor-notas/seleccionar-profesor-notas.component';
import { ReporteNotasProfesorComponent } from './reporte-notas-profesor/reporte-notas-profesor.component';

const routes: Routes = [
  {
    path: '',
    component: ListaReportesComponent
  },
  {
    path:'notas/estudiante',
    component: SeleccionarEstudianteNotasComponent
  },
  {
    path: 'notas/estudiante/:id',
    component: ReporteNotasEstudianteComponent
  },
  {
    path: 'notas/curso',
    component: SeleccionarCursoNotasComponent
  },
  {
    path: 'notas/curso/:id',
    component: ReporteCursoNotasComponent
  },
  {
    path: 'notas/profesor',
    component: SeleccionarProfesorNotasComponent
  },
  {
    path: 'notas/profesor/:id',
    component: ReporteNotasProfesorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
