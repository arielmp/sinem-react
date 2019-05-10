import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEncargadosComponent } from './lista-encargados/lista-encargados.component';
import { FormEncargadoComponent } from './form-encargado/form-encargado.component';

const routes: Routes = [
  {
    path:'',
    component: ListaEncargadosComponent    
  },
  {
    path: 'crear',
    component: FormEncargadoComponent,
    data:{tipoForm:'insertar'}
  },
  {
    path: 'editar/:id',
    component: FormEncargadoComponent,
    data:{tipoForm:'editar'}
  },
  {
    path: 'ver/:id',
    component: FormEncargadoComponent,
    data:{tipoForm:'ver'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncargadoRoutingModule { }
