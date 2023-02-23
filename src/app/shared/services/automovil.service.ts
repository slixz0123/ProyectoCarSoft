import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/core/enviroments/environment';
import { Automovil } from 'src/app/core/models/automovil';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}

    addAutomovil(Automovil: Automovil): Observable<Automovil> {

    return this.http.post<any>(
      `${this.url}/`,
      Automovil
    );
  }


  getProduct(): Observable<Automovil[]> {
    return this.http.get<Automovil[]>(`${this.url}/listar`);
  }
  updateProduct(producto: Automovil, num_placa: string): Observable<any> {
    return this.http.put(`${this.url}/actualizar/${num_placa}`, producto);
  }

  getProductById(id: string): Observable<Automovil> {
    return this.http.get<Automovil>(`${this.url}/${id}`);
  }



}
