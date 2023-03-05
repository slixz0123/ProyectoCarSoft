import { Component } from '@angular/core';


import { CargarscriptsService } from '../../../services/cargarjs.service';
@Component({
  selector: 'app-generar-renta-cliente',
  templateUrl: './generar-renta-cliente.component.html',
  styleUrls: ['./generar-renta-cliente.component.css']
})
export class GenerarRentaClienteComponent {
  constructor(
    private car: CargarscriptsService,



  )

  {
    {

      car.carga2(["Calculardias"]);

    }
  }

}
