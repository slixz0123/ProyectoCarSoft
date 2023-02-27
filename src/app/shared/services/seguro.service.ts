import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguro } from 'src/app/core/models/seguro';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {
  private URL = "http://localhost:8080/claseAutomovil/";
	constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<Seguro[]>(this.URL + 'listar');
  }

  getPorId(seguro: any) {
    return this.http.get<Seguro>(this.URL + seguro);
  }

  post(seguro: Seguro) {
    return this.http.post<Seguro>(this.URL + '?', seguro);
  }

  update(seguro: Seguro, idseguro: any) {
    return this.http.put<Seguro>(this.URL + `actualizar/${idseguro}`, seguro);
  }

  delete( idseguro: any) {
    return this.http.delete<boolean>(this.URL + `eliminar/${idseguro}`);
  }


}
