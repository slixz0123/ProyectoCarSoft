import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from 'src/app/core/models/persona';
import { Rol } from 'src/app/core/models/rol';
import { PersonaI } from 'src/app/core/interfaces/personaI';
import { Usuarios } from 'src/app/core/interfaces/usuario';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private URL = "http://localhost:8080/persona/";
  private URL2 = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<Persona[]>(`${this.URL}listaper`);
  }

  getPorId(idPersona: number) {
    return this.http.get<Persona>(this.URL + idPersona);
  }

  postPersona(persona: Persona) {
    return this.http.post<Persona>(this.URL + '?', persona);
  }

  updatePersona(persona: Persona, idPersona: any) {
    return this.http.put<Persona>(this.URL + `actualizar/${idPersona}`, persona);
  }

  deletePersona(idPersona: number) {
    return this.http.delete<Persona>(this.URL + `eliminar/${idPersona}`);
  }

  save(persona: Persona) {
    return this.http.post(`${this.URL}/`, persona);
  }

  listarPersona(): Observable<any> {
    return this.http.get(`${this.URL}listaper`);
  }

  getPorCedula(id_persona: any) {
    return this.http.get<Persona>(this.URL + `buscarpersona/${id_persona}`);
  }
  getPersonasConUsuarios(): Observable<PersonaI[]> {
    return this.http.get<any>(`${this.URL}/listar?_expand=listaruser`)
      .pipe(
        map(data => data.map((item: any) => ({
          id: item.id_persona,
          cedula: item.cedula,
          nombre: item.nombre,
          apellido:item.apellido,
          correo: item.correo,
          telefono:item.telefono,
          usuario: item.usuario
        })))
      );
  }
}
