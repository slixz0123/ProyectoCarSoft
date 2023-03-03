import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarscriptsService {

  constructor() { }

  cargacarrousel(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
  carga2(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
  carga3(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  cargajs(archivos:string[]){
    for (let archivo of archivos){
      let script = document.createElement("script");
//src/assets/js/swiper-bundle.min.js
      script.src = "./assets/js/"+archivo+".js"
       let body = document.getElementsByTagName("body")[0];
       body.appendChild(script);
    }
  }
}
