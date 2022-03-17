import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importo los componentes de diseño:
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextareaModule} from 'primeng/inputtextarea';
//Calendario para el campo del formulario
import {CalendarModule} from 'primeng/calendar';
// División y estructura de las html
import {SplitterModule} from 'primeng/splitter';
// Imágenes
import {ImageModule} from 'primeng/image';
// Aleta - diálogo con el usuario
import {DialogModule} from 'primeng/dialog';
// Carrusel
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    SplitterModule,
    ImageModule,
    DialogModule,
    CarouselModule


  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    SplitterModule,
    ImageModule,
    DialogModule,
    CarouselModule
  ]
})
export class PrimeModule { }
