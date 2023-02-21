import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-headerlogsidebar',
  templateUrl: './headerlogsidebar.component.html',
  styleUrls: ['./headerlogsidebar.component.css']
})
export class HeaderlogsidebarComponent {
  constructor(
    private _CargarScripts2: CargarscriptsService,



  )

  {
    {

      _CargarScripts2.carga(["bootstrap.min"])
      _CargarScripts2.carga2(["pcoded"])
      _CargarScripts2.carga3(["pcoded.min"])
      _CargarScripts2.carga4(["uikit"])
      _CargarScripts2.carga5(["uikit.min"])
      _CargarScripts2.carga6(["vendor-all"])
      _CargarScripts2.carga7(["vendor-all.min"])
      _CargarScripts2.carga8(["dashboard-sale"])
      _CargarScripts2.carga9(["chart-apex"])
      _CargarScripts2.carga10(["apexcharts.min"])
      _CargarScripts2.carga11(["clipboard.min"])
      _CargarScripts2.carga12(["feather.min"])
      _CargarScripts2.carga13(["gmaps.min"])
      _CargarScripts2.carga14(["jquery-ui.min"])

      _CargarScripts2.carga15(["nouislider.min"])
      _CargarScripts2.carga16(["perfect-scrollbar.min"])
      _CargarScripts2.carga17(["prism"])
      _CargarScripts2.carga18(["wNumb.min"])
      _CargarScripts2.carga19(["google-maps"])
      _CargarScripts2.carga20(["header2"])
      _CargarScripts2.carga12(["sid"])




    }
  }

}
