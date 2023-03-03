import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/app/core/enviroments/environment';
import { Automovil } from 'src/app/core/interfaces/automovil';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {
  private url = environment.baseUrl;


  private URL = "http://localhost:8080/automovil";
  private URL2 = "http://localhost:8080/automovil/crear";

  constructor(private http: HttpClient) { }

  crearAutomovil(automovil: Automovil): Observable<Automovil> {
    return this.http.post<Automovil>(`${this.URL}/crear`, automovil);
  }

  getauto() {
    return this.http.get<Automovil[]>(this.URL + '/listarauto');
  }

  getPorId(num_placa: string) {
    return this.http.get<Automovil>(this.URL + num_placa);
  }

  postAutos(auto: Automovil): Observable<any> {
    return this.http.post<any>(`${this.URL2}?`, auto).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la solicitud: ', error);
        return throwError('Error al agregar el automóvil, intente nuevamente más tarde.');
      })
    );
  }

  updateAutos(auto: Automovil, num_placa: string) {
    return this.http.put<Automovil>(this.URL + `updateauto/${num_placa}`, auto);
  }

  deleteAutos(num_placa: string) {
    return this.http.delete<boolean>(this.URL + `borrarAuto/${num_placa}`);
  }

  save(auto: Automovil) {
    return this.http.post(`${this.URL2}?`, auto);
  }

  listarAutos(): Observable<any> {
    return this.http.get(`${this.URL}/listarauto`);
  }
  verfplaca(username: string) {
    return this.http.get<boolean>(this.URL + `verplaca/${username}`)
  }





}
