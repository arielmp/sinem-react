import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { FormEstudianteComponent } from './form-estudiante/form-estudiante.component';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';


const routes: Routes = [
  {
    path: '',
    component: ListaEstudiantesComponent    
  },
  {
    path: 'crear',
    component: FormEstudianteComponent,
    data:{tipoForm:'insertar'}
  },
  {
    path: 'ver/:id',
    component: FormEstudianteComponent,
    data:{tipoForm:'ver'}
  },
  {
    path: 'editar/:id',
    component: FormEstudianteComponent,
    data:{tipoForm:'editar'}
  },
  {
    path: 'subir',
    component: SubirImagenComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
