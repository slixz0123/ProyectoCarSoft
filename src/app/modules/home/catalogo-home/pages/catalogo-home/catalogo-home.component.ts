import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs';
import { Automovil } from 'src/app/core/interfaces/automovil';
import { AutomovilService } from 'src/app/shared/services/automovil.service';

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
  automovil = new Automovil();
  arrayExcel:any;
  loaded = false;
  aut: Automovil[] = [];
  selectedId = 0;
  showMe!: boolean;

  constructor(private automovilservice: AutomovilService){

  }
  ngOnInit(): void {
    this.obtenerProdctos();
    // // nuevo
    // this.productos.forEach(producto => {
    //   console.log("OLA JAJA")
    //   console.log("es el" + producto.imagen);

    // });


  }
  obtenerProdctos() {
    this.automovilservice
    .listarAutos() .subscribe({
        next: (aut) =>
          this.automovil = aut,
        error: (err) => {
          console.log(err.message);
        },
      });
  }
}
