import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/core/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private URL = "http://localhost:8080/persona/";

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<Persona[]>(this.URL + 'listar');
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
    return this.http.delete<boolean>(this.URL + `eliminar/${idPersona}`);
  }

  save(persona: Persona) {
    return this.http.post(`${this.URL}/`, persona);
  }

  listarPersona(): Observable<any> {
    return this.http.get(`${this.URL}/listar`);
  }

  getPorCedula(cedula: any) {
    return this.http.get<Persona>(this.URL + `byCedula/${cedula}`);
  }
}
