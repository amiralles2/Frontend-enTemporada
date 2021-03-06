import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';
import { MatDialogModule } from '@angular/material/dialog';

import { IndexrecetaindComponent } from './indexrecetaind/indexrecetaind.component';
import { DetallesrecetasComponent } from './detallesrecetas/detallesrecetas.component';
import { PasosComponent } from './pasos/pasos.component';
import { BotoneditarComponent } from './botoneditar/botoneditar.component';



@NgModule({
  declarations: [
    IndexrecetaindComponent,
    DetallesrecetasComponent,
    PasosComponent,
    BotoneditarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule,
    MatDialogModule
  ],
  exports: [
    IndexrecetaindComponent,
  ]

})
export class RecetaindividualModule { }
