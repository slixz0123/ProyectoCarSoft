import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Automovil } from 'src/app/core/interfaces/automovil';
import { AutomovilService } from 'src/app/shared/services/automovil.service';

import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-catalogo-renta-cliente',
  templateUrl: './catalogo-renta-cliente.component.html',
  styleUrls: ['./catalogo-renta-cliente.component.css']
})
export class CatalogoRentaClienteComponent {
informacionUser: any;
  constructor(
    private catalogo: CargarscriptsService,
    private automovilservice: AutomovilService,
    private router: Router

  ){
    catalogo.carga(["Catalogo"]);
  }

  @Input() member: number = 0;


  aut : Automovil = new Automovil;


  automoviles: Automovil[] = [];
  selectedId = 0;
  showMe!: boolean;


  ngOnInit(): void {
    this.obtenercaros();
    // // nuevo
    // this.productos.forEach(producto => {
    //   console.log("OLA JAJA")
    //   console.log("es el" + producto.imagen);

    // });


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

  obtenerUsuario() {


      this.automovilservice.listarAutos().subscribe((data) => {
        console.log(data);

      });

  }

 enviarNumeroPlaca(num_placa: string) {
  localStorage.setItem('num_placa', num_placa);
  console.log(num_placa)
  this.router.navigate(['/client-carsoft/generar-rent-client'])
}



}
