import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(
    private http: HttpClient
  ) { }

  private urlApiFoto: string = 'http://localhost:8080/image';

  // NUEVOS METODOS
  guararImagenes(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    this.http.post(this.urlApiFoto + '/subir', formData).subscribe();
  }

}
