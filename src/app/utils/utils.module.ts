import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { PopUpComponent } from './login/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubirComponent } from './subir/subir.component';
import { FormsModule } from '@angular/forms';
import { CargaComponent } from './carga/carga.component';
import { ReporteComponent } from './reporte/reporte.component';



@NgModule({
  declarations: [
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    PopUpComponent,
    SubirComponent,
    CargaComponent,
    ReporteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    SubirComponent,
    CargaComponent,
    FormsModule,
    ReporteComponent
  ]
})
export class UtilsModule { }
