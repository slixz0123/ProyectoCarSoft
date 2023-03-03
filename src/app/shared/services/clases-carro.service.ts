import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';

@Injectable({
  providedIn: 'root'
})
export class ClasesCarroService {
  private URL = "http://localhost:8080/claseAutomovil/";
  private URL2 = "http://localhost:8080/claseAutomovil/buscar";
	constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<Claseautomovil[]>(this.URL + 'listar');
  }

  getPorId(claseAutomovil: any) {
    return this.http.get<Claseautomovil>(this.URL2 + claseAutomovil);
  }

  post(claseAutomovil: Claseautomovil) {
    return this.http.post<Claseautomovil>(this.URL + '?', claseAutomovil);
  }

  update(claseAutomovil: Claseautomovil, idClase: any) {
    return this.http.put<Claseautomovil>(this.URL + `actualizar/${idClase}`, claseAutomovil);
  }

  delete( idClase: any) {
    return this.http.delete<boolean>(this.URL + `eliminar/${idClase}`);
  }



}
