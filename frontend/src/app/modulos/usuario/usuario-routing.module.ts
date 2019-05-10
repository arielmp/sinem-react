import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: ListaUsuariosComponent
  },
  {
    path: 'crear',
    component: FormUsuarioComponent,
    data:{tipoForm:'insertar'}
  },
  {
    path: 'ver/:id',
    component: FormUsuarioComponent,
    data:{tipoForm:'ver'}
  },
  {
    path: 'editar/:id',
    component: FormUsuarioComponent,
    data:{tipoForm:'editar'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
