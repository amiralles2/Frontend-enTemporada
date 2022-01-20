import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusModule } from './aboutus/aboutus.module';
import { HomeModule } from './home/home.module';
import { CalendarioModule } from './calendario/calendario.module';
import { RegistroModule } from './registro/registro.module';
import { InfoproductoModule } from './infoproducto/infoproducto.module';
import { RecetasModule } from './recetas/recetas.module';
import { PerfilModule } from './perfil/perfil.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AboutusModule,
    HomeModule,
    CalendarioModule,
    RegistroModule,
    InfoproductoModule,
    RecetasModule,
    PerfilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
