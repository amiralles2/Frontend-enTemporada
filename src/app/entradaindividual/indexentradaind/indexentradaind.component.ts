import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntradasService } from 'src/app/servicios/entradas.service';
import { Entradas } from 'src/app/modelos/entradas.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';


@Component({
  selector: 'app-indexentradaind',
  templateUrl: './indexentradaind.component.html',
  styleUrls: ['./indexentradaind.component.scss'],

})
export class IndexentradaindComponent implements OnInit {

  constructor(private router: Router,private token: TokenStorageService,private usservice: UsuarioService,private entradasService: EntradasService, private rutaActiva: ActivatedRoute) { }

  id = this.rutaActiva.snapshot.paramMap.get('id');
  entradaid = Number(this.rutaActiva.snapshot.paramMap.get('id'));
  entrada?:  Entradas;
  idPropietarioEntrada?: number;
  tituloentrada?:string;
  ngOnInit(): void {
    this.getEntrada();
    if(this.token.getId()){
      this.usservice.ultimaentrada(this.entradaid, Number(this.token.getId())).subscribe({
        next:(data)=>{
        }
      });
    }
  }

  getEntrada(){
    this.entradasService.getById(this.entradaid).subscribe({
      next: (data) => {
        if (data) {
          this.entrada = data;
          this.idPropietarioEntrada=data?.usuario?.id;
          this.tituloentrada = data?.titulo;
        }
        else {
          this.router.navigate(['entradas'])
        }

      },
      error: (e) => {
        this.router.navigate(['entradas'])
      }
    })
  }

}
