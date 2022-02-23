import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../baseurl';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = serverUrl + "user";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  getContent(): Observable<any> {
    return this.http.get(baseUrl, { responseType: 'text' });
  }

  getById(): Observable<any> {
    return this.http.get(`${baseUrl}/${this.token.getId()}?expand=totalrecetas,totalguardadas,totalfavoritos,totallikes`);
  }

  modificarUsuario(id: number, nick: string, imagen: string, descripcion: string): Observable<any> {
    console.log(id);
    return this.http.put(baseUrl + "/updateuser?id=" + id, {
      nick: nick,
      imagen: imagen,
      descripcion: descripcion,

    }, httpOptions);

  }
}