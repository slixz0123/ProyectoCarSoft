import { Component } from '@angular/core';
import { CargascripsjsService } from 'src/app/shared/services/cargascripsjs.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(
    private Cargascrip: CargascripsjsService
 


  ) {
    {
      Cargascrip.carga(["main"])
    }
  }


}
