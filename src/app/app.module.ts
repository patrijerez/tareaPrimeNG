import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionModule } from './informacion/informacion.module';
import { PrimeModule } from './prime/prime.module';
import { SharedModule } from './shared/shared.module';
// Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Cambiar el idioma del módulo local, para que por ejemplo las fechas salgan en Español
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule,
    SharedModule,
    InformacionModule,
    BrowserAnimationsModule
  ],
  providers: [ {provide:LOCALE_ID,useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
