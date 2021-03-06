import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { Recetas } from 'src/app/modelos/recetas.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-botoneditar',
  templateUrl: './botoneditar.component.html',
  styleUrls: ['./botoneditar.component.scss'],
  providers: [RecetasService]

})
export class BotoneditarComponent implements OnInit {
  @Input() recetaid!: number;
  recetas!: Recetas;

  mostrar = false;
  constructor(private router:Router,private token: TokenStorageService, private recetasservice: RecetasService) {
  }

  ngOnInit(): void {
    this.getRecetas();

  }
  mostrarBoton(idusuario: Number) {
    if (idusuario == Number(this.token.getId())) {
      this.mostrar = true;
    }
  }
  getRecetas() {//cambiar la id por la que verdaderamente toca
    this.recetasservice.getById(this.recetaid).subscribe({
      next: (data) => {
        this.recetas = data;
        this.mostrarBoton(this.recetas.id_usuario);
      },
      error: (e) => console.error(e)
    });
  }
  deleteReceta(){
    this.recetasservice.borrarReceta(this.recetaid).subscribe({
      next:(data) =>{
      }
    })
    this.router.navigate(['recetas']);
  }


}
