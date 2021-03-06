import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosproductoComponent } from './datosproducto/datosproducto.component';
import { IndexprodComponent } from './indexprod/indexprod.component';
import { UtilsModule } from '../utils/utils.module';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { RelacionadasComponent } from './relacionadas/relacionadas.component';


import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    DatosproductoComponent,
    IndexprodComponent,
    DescripcionComponent,
    RelacionadasComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,RouterModule
  ]
})
export class InfoproductoModule { }
