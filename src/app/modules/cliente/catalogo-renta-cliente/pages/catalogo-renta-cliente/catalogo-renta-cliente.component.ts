import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-catalogo-renta-cliente',
  templateUrl: './catalogo-renta-cliente.component.html',
  styleUrls: ['./catalogo-renta-cliente.component.css']
})
export class CatalogoRentaClienteComponent {

  constructor(
    private catalogo: CargarscriptsService,
  ){
    catalogo.carga(["Catalogo"]);
  }
}
