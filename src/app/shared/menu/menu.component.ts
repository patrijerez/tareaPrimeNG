import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'

})
export class MenuComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
    //Definimos la estructura propia de nuestro menú

      this.items = [
          {
              label:'Desplegar',
              icon:'pi pi-chevron-down',
              items: [
                {
                  label:'Sobre mí',
                  icon: 'pi pi-code',
                  routerLink:'/'
                },
                {
                  label:'Galería',
                  icon: 'pi pi-camera',
                  routerLink:'galeria'
                },
                {
                  label:'Contacto',
                  icon: 'pi pi-at',
                  routerLink:'contacto'
                }
              ]
          }
      ];
  }

}
