import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs';
import { Automovil } from 'src/app/core/interfaces/automovil';
import { AutomovilService } from 'src/app/shared/services/automovil.service';
import { DataService } from 'src/app/shared/services/DataService';
import { FotoService } from 'src/app/shared/services/foto.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-catalogo-home',
  templateUrl: './catalogo-home.component.html',
  styleUrls: ['./catalogo-home.component.css']
})
export class CatalogoHomeComponent {
  @Input() imageLoader: any = `http://localhost:8080/image/verfoto/`;
  @Input() member: number = 0;

  loading: boolean = true;
  arraySelected:any;
  aut = new Automovil();
  arrayExcel:any;
  loaded = false;
  automoviles: Automovil[] = [];
  selectedId = 0;
  showMe!: boolean;
  num_placa:string='';
  constructor(private automovilservice: AutomovilService, private fotoService: FotoService, 
    private usuariosService: UsuarioService, private dataService:DataService){

  }
  ngOnInit(): void {
    this.obtenercaros();
    // // nuevo
    // this.productos.forEach(producto => {
    //   console.log("OLA JAJA")
    //   console.log("es el" + producto.imagen);

    // });


  }

  rentarVehiculo() {
    this.dataService.setNumPlaca(this.num_placa);
  }
  
  obtenercaros() {
    this.automovilservice
    .listarAutos() .subscribe({
        next: (aut) =>

          this.automoviles = aut,

        error: (err) => {
          console.log(err.message);
          console.log("hola")
        },
      });
  }
}
