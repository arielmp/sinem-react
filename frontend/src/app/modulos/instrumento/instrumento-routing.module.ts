import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaInstrumentosComponent } from './lista-instrumentos/lista-instrumentos.component';
import { FormInstrumentoComponent } from './form-instrumento/form-instrumento.component';
import { SeleccionarInstrumentosComponent } from './seleccionar-instrumentos/seleccionar-instrumentos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaInstrumentosComponent
  },
  {
    path: 'crear',
    component: FormInstrumentoComponent,
    data:{tipoForm:'insertar'}
  },
  {
    path: 'ver/:id',
    component: FormInstrumentoComponent,
    data:{tipoForm:'ver'}
  },
  {
    path: 'editar/:id',
    component: FormInstrumentoComponent,
    data:{tipoForm:'editar'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentoRoutingModule { }
