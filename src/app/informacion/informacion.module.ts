import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { PrimeModule } from '../prime/prime.module';



@NgModule({
  declarations: [
    SobreComponent,
    ContactoComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports:[
    SobreComponent,
    ContactoComponent,
    GaleriaComponent
  ]
})
export class InformacionModule { }
