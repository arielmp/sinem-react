import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { InstrumentoRoutingModule } from './instrumento-routing.module';
import { ListaInstrumentosComponent } from './lista-instrumentos/lista-instrumentos.component';
import { FormInstrumentoComponent } from './form-instrumento/form-instrumento.component';
import { SeleccionarInstrumentosComponent } from './seleccionar-instrumentos/seleccionar-instrumentos.component';

@NgModule({
  declarations: [ListaInstrumentosComponent, FormInstrumentoComponent, SeleccionarInstrumentosComponent],
  imports: [
    CommonModule,
    InstrumentoRoutingModule,
    FormsModule    
  ],
  exports: [SeleccionarInstrumentosComponent]
})
export class InstrumentoModule { }
