import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PersonaI } from 'src/app/core/interfaces/personaI';
import { Alquiler } from 'src/app/core/models/alquiler';
import { Persona } from 'src/app/core/models/persona';
import { Reserva } from 'src/app/core/models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private URL = "http://localhost:8080/reserva/";
  private URL2 = "http://localhost:8080/reserva/crear";
  constructor(private http: HttpClient) { }

  getReserva() {
    return this.http.get<Reserva[]>(`${this.URL}listares`);
  }

  getPorId(cod_reserva: number) {
    return this.http.get<Reserva>(this.URL + cod_reserva);
  }

  updateAlquiler(reserva: Reserva, cod_reserva: any) {
    return this.http.put<Reserva>(this.URL + `actualizar/${cod_reserva}`, reserva);
  }

  deleteAlquiler(cod_reserva: number) {
    return this.http.delete<Reserva>(this.URL + `eliminar/${cod_reserva}`);
  }

  save(reserva: Reserva) {
    return this.http.post(`${this.URL2}/`, reserva);
  }

  listarReserva(): Observable<any> {
    return this.http.get(`${this.URL}listares`);
  }

}
