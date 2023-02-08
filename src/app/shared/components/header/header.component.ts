import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private _CargarScripts: CargarscriptsService,



  )

  {
    {
      _CargarScripts.carga(["scrollHeaderBlock"])
    }
  }
}
