import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/core/models/usuario';
import { Observable } from 'rxjs';
import { LoginI } from 'src/app/core/interfaces/LoginInterface';
import { ResponseI } from 'src/app/core/interfaces/responseI';
import { Persona } from 'src/app/core/models/persona';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private URL = "http://localhost:8080/usuario/";
  private URL2 = "http://localhost:8080/persona/";

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.URL + 'listar');
  }

  getPorId(idUsuario: any) {
    return this.http.get<Usuario>(this.URL + idUsuario);
  }

  postUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.URL + '?', usuario);
  }

  updateUsuario(usuario: Usuario, idUsuario: any) {
    return this.http.put<Usuario>(this.URL + `actualizar/${idUsuario}`, usuario);
  }

  deleteUsuario(idUsuario: number) {
    return this.http.delete<boolean>(this.URL + `eliminar/${idUsuario}`);
  }

  login(nombreUsuario: string, password: string) {
    // http://localhost:8080/usuario/login/
    return this.http.get<Usuario>(this.URL + `login/${nombreUsuario}/${password}`)
  }

   verfUsername(username: string) {
     return this.http.get<boolean>(this.URL + `porUsername/${username}`)

   }

   getPorusr(id_rol: any) {
    //http://localhost:8080/usuario/bus
    return this.http.get<Usuario>(this.URL + `bus/${id_rol}`);
  }



  getUsuarioByPersonaId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.URL}?/id_persona=${id}`);
  }

}
