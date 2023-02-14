import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private _CargarScripts2: CargarscriptsService,



  )

  {
    {
      _CargarScripts2.carga2(["scrollHeaderBlock"])
      _CargarScripts2.carga2(["header"])


    }
  }

}
