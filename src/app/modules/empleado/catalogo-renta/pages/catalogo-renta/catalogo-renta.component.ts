import { Component } from '@angular/core';
import { Automovil } from 'src/app/core/interfaces/automovil';
import { AutomovilService } from 'src/app/shared/services/automovil.service';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-catalogo-renta',
  templateUrl: './catalogo-renta.component.html',
  styleUrls: ['./catalogo-renta.component.css']
})
export class CatalogoRentaComponent {

  autos?: Automovil[] = [] ;
  selectedId = "";
  utomovil = new Automovil();
  constructor(
    private caro: CargarscriptsService,
  private automoviles: AutomovilService


  )

  {
    {

      caro.carga(["Catalogo"]);

    }
  }

  ngOnInit(): void {

    this.automoviles.getauto().subscribe(
      res => this.autos = res
    )


  }







}
