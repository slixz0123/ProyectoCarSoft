import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarscriptsService {

  constructor() { }

  carga(archivos: string[]) {

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

      script.src = "./assets/js/" + archivo + ".js"
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

  carga4(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
  carga5(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
  carga6(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
  carga7(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
  carga8(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
  carga9(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga10(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
  carga11(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga12(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga13(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga14(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga15(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga16(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga17(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga18(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga19(archivos: string[]) {

    for (let archivo of archivos) {
      let script = document.createElement("script");

      script.src = "./assets/" + archivo + ".js"
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  carga20(archivos: string[]) {

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
