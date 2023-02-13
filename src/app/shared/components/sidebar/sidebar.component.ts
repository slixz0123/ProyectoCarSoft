import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private car: CargarscriptsService,



  )

  {
    {

      car.carga(["sidebar"]);

    }
  }

}


