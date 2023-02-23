import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/core/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private URL = "http://localhost:8080/usuario/";


  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.URL + 'listarpersona');
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
    return this.http.get<Usuario>(this.URL + `login/${nombreUsuario}/${password}`)
  }

  verfUsername(username: string) {
    return this.http.get<boolean>(this.URL + `porUsername/${username}`)
  }



}
