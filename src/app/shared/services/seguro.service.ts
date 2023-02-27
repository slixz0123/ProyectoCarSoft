import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguro } from 'src/app/core/models/seguro';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {
  private URL = "http://localhost:8080/seguro/";
	constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<Seguro[]>(this.URL + 'listarseg');
  }

  getPorId(seguro: any) {
    return this.http.get<Seguro>(this.URL + seguro);
  }

  post(seguro: Seguro) {
    return this.http.post<Seguro>(this.URL + '?', seguro);
  }

  update(seguro: Seguro, idseguro: any) {
    return this.http.put<Seguro>(this.URL + `actualizarseg/${idseguro}`, seguro);
  }

  delete( idseguro: any) {
    return this.http.delete<boolean>(this.URL + `eliminar/${idseguro}`);
  }


}
