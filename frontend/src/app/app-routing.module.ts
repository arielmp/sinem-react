import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './modulos/secciones/menu/menu.component';
import { NotfoundComponent } from './modulos/comun/notfound/notfound.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { SigninComponent } from './modulos/signin/signin.component';
import {AuthService} from './servicios/auth.service';
import { ProcedimientosComponent } from './procedimientos/procedimientos.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'estudiantes',
    loadChildren: './modulos/estudiante/estudiante.module#EstudianteModule',
    canActivate: [AuthService]    
  },
  {
    path: 'instrumentos',
    loadChildren: './modulos/instrumento/instrumento.module#InstrumentoModule',
    canActivate: [AuthService]
  },
  {
    path: 'encargados',
    loadChildren: './modulos/encargado/encargado.module#EncargadoModule',
    canActivate: [AuthService]
  },
  {
    path: 'profesores',
    loadChildren: './modulos/profesor/profesor.module#ProfesorModule',
    canActivate: [AuthService]
  },
  {
    path: 'usuarios',
    loadChildren: './modulos/usuario/usuario.module#UsuarioModule',
    canActivate: [AuthService]
  },
  {
    path: 'cursos',
    loadChildren: './modulos/curso/curso.module#CursoModule',
    canActivate: [AuthService]
  },
  {
    path: 'calificar',
    loadChildren: './modulos/calificacion/calificacion.module#CalificacionModule',
    canActivate: [AuthService]
  },
  {
    path: 'reportes',
    loadChildren: './modulos/reporte/reporte.module#ReporteModule',
    canActivate: [AuthService]
  },
  {
    path: 'matricula',
    loadChildren: './modulos/matricula/matricula.module#MatriculaModule',
    canActivate: [AuthService]
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'pruebas',
    component: PruebasComponent
  },
  {
    path: 'procedimientos',
    component: ProcedimientosComponent
  },
  {
    path: 'not-found',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
