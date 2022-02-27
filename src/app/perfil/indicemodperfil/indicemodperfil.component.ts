import { Component, OnInit } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-indicemodperfil',
  templateUrl: './indicemodperfil.component.html',
  styleUrls: ['./indicemodperfil.component.scss'],
  providers: [UsuarioService, TokenStorageService]
})
export class IndicemodperfilComponent implements OnInit {

  usuario!: Usuarios;
  ultimareceta?: Recetas;
  recetapopular?: Recetas;
  constructor(private usuariosService: UsuarioService, private recetasService: RecetasService, private token: TokenStorageService) { }
  exp_res = 0;
  nivel = 0;
  rutaLogo = "";
  rutaUser = "";
  id_usuario = this.token.getId();
  ngOnInit(): void {
    this.getUser();
    this.getUltimaReceta();
    this.getRecetaPopular();
  }
  
  getUser(): void {
    this.usuariosService.getById().subscribe({
      next: (data) => {
        this.usuario = data;
        this.getLvl(this.usuario.exp ?? 0);

        this.rutaUser = "../../../assets/IMG/Usuarios/" + this.usuario.imagen;
        this.rutaLogo = "../../../assets/IMG/Niveles/lvl_" + this.nivel + "-removebg-preview.png";

      }
    })
  }
  getLvl(expe: number) {
    if (expe / 100 > 0) {
      this.nivel = Math.floor(expe / 100) + 1;
      this.exp_res = ((expe / 100) % 1) * 100;
      // console.log("Nivel = " + this.nivel)
      // console.log("Exp = " + this.exp_res)
    } if (expe >= 400) {
      this.nivel = 5;
      this.exp_res = 100;

    } if (expe / 100 == 0) {
      this.nivel = 1;
    }
  }


  getUltimaReceta() {
    this.recetasService.getUltimaReceta().subscribe({
      next: (data) => {
        this.ultimareceta = data;
        if (!data) {
          this.ultimareceta = {
            id: 0,
            id_usuario: 0,
            imagen: "default.gif",
            titulo: "No encontrada",
            tiempo: "",
            usuario_img: "default.png",
            nick: "Nobody",
            dificultad: "",
          };
        }
      }
    })
  }

  getRecetaPopular() {
    this.recetasService.getRecetaPopular().subscribe({
      next: (data) => {
        this.recetapopular = data;
        if (!data) {
          this.recetapopular = {
            id: 0,
            id_usuario: 0,
            imagen: "default.gif",
            titulo: "No encontrada",
            tiempo: "",
            usuario_img: "default.png",
            nick: "Nobody",
            dificultad: "",
          };
        }


      }
    })
  }


}



