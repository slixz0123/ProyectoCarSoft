import { Component } from '@angular/core';

import { CargarscriptsService } from '../../../services/cargarjs.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(
    private car: CargarscriptsService,



  )

  {
    {
      
      car.cargacarrousel (["carruselcarros"])
    }
  }


}
