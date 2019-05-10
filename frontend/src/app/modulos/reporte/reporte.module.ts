import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { SeleccionarEstudianteNotasComponent } from './seleccionar-estudiante-notas/seleccionar-estudiante-notas.component';
import { ReporteCursoNotasComponent } from './reporte-curso-notas/reporte-curso-notas.component';
import { ReporteNotasEstudianteComponent } from './reporte-notas-estudiante/reporte-notas-estudiante.component';
import { SeleccionarCursoNotasComponent } from './seleccionar-curso-notas/seleccionar-curso-notas.component';
import { SeleccionarProfesorNotasComponent } from './seleccionar-profesor-notas/seleccionar-profesor-notas.component';
import { ReporteNotasProfesorComponent } from './reporte-notas-profesor/reporte-notas-profesor.component';

@NgModule({
  declarations: [ListaReportesComponent, SeleccionarEstudianteNotasComponent, ReporteCursoNotasComponent, ReporteNotasEstudianteComponent, SeleccionarCursoNotasComponent, SeleccionarProfesorNotasComponent, ReporteNotasProfesorComponent],
  imports: [
    CommonModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
