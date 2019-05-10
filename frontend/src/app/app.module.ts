import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SeccionesModule } from './modulos/secciones/secciones.module';
import { ComunModule } from './modulos/comun/comun.module';
import { TokenInterceptor } from './servicios/token.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { SigninComponent } from './modulos/signin/signin.component';
import { ProcedimientosComponent } from './procedimientos/procedimientos.component';





@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    SigninComponent,
    ProcedimientosComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeccionesModule,
    ComunModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
