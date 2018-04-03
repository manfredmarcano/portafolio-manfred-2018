import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';

import { ServicioComunService } from './servicio-comun.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioComunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
