import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-catalogo-renta',
  templateUrl: './catalogo-renta.component.html',
  styleUrls: ['./catalogo-renta.component.css']
})
export class CatalogoRentaComponent {

  constructor(
    private caro: CargarscriptsService,



  )

  {
    {

      caro.carga(["Catalogo"]);

    }
  }
  

}
