import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './informacion/paginas/contacto/contacto.component';
import { GaleriaComponent } from './informacion/paginas/galeria/galeria.component';
import { SobreComponent } from './informacion/paginas/sobre/sobre.component';

const routes: Routes = [
  {
    path:'',
    component:SobreComponent,
    pathMatch:'full'
  },
  {
    path:'galeria',
    component:GaleriaComponent
  }
  ,
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
