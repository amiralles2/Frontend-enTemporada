import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';

import { FotorecetaComponent } from './fotoreceta/fotoreceta.component';
import { IndexrecetaindComponent } from './indexrecetaind/indexrecetaind.component';
import { DetallesrecetasComponent } from './detallesrecetas/detallesrecetas.component';
import { PasosComponent } from './pasos/pasos.component';



@NgModule({
  declarations: [
    FotorecetaComponent,
    IndexrecetaindComponent,
    DetallesrecetasComponent,
    PasosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule
  ],
  exports: [
    IndexrecetaindComponent,
    FotorecetaComponent
  ]
  
})
export class RecetaindividualModule { }