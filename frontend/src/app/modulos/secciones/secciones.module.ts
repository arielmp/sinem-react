import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [NavegacionComponent, MenuComponent],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ],
  exports: [NavegacionComponent, MenuComponent]
})
export class SeccionesModule { }
