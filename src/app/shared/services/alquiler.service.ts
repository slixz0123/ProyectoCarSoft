import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PersonaI } from 'src/app/core/interfaces/personaI';
import { Alquiler } from 'src/app/core/models/alquiler';
import { Persona } from 'src/app/core/models/persona';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  private URL = "http://localhost:8080/alquiler/";
  private URL2 = "http://localhost:8080/alquiler/crear";
  constructor(private http: HttpClient) { }

  getAlquiler() {
    return this.http.get<Alquiler[]>(`${this.URL}listaper`);
  }

  getPorId(id_alquiler: number) {
    return this.http.get<Alquiler>(this.URL + id_alquiler);
  }

  postAlquiler(alquiler: Alquiler) {
    return this.http.post<Alquiler>(this.URL2 + '?', alquiler);
  }

  updateAlquiler(alquiler: Alquiler, id_alquiler: any) {
    return this.http.put<Alquiler>(this.URL + `actualizar/${id_alquiler}`, alquiler);
  }

  deleteAlquiler(id_alquiler: number) {
    return this.http.delete<Alquiler>(this.URL + `eliminar/${id_alquiler}`);
  }

  save(alquiler: Alquiler) {
    return this.http.post(`${this.URL}/`, alquiler);
  }

  listarAlquiler(): Observable<any> {
    return this.http.get(`${this.URL}listaral`);
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
