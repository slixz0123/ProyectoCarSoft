import { Component } from '@angular/core';
import { Alquiler } from 'src/app/core/models/alquiler';
import { AlquilerService } from 'src/app/shared/services/alquiler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-renta-cliente',
  templateUrl: './solicitud-renta-cliente.component.html',
  styleUrls: ['./solicitud-renta-cliente.component.css']
})
export class SolicitudRentaClienteComponent {
  buscar='';
  alquiler: Alquiler[]= [];
  alquilera: Alquiler = new Alquiler();
  constructor(private alquile: AlquilerService){}
  ngOnInit():void{
    this.alquile.listarAlquiler().subscribe(
      clas=>this.alquiler=clas
    )
  }

  ClaseSeleccionada: Alquiler  | undefined;

  seleccionarCarro(cl: Alquiler,id_alquiler:number) {
    this.ClaseSeleccionada = cl;

    this.alquile.getPorId(id_alquiler).subscribe(
      data =>{
        console.log(data)
      }
    )
  }






  editarclase(alquilera:Alquiler,id_alquiler:number){



    this.alquile.getPorId(id_alquiler).subscribe(
      data =>{
        console.log(data)

       this.alquile.updateAlquiler(alquilera,id_alquiler).subscribe(
         data=>{
           console.log(data);

           this.alquilera.documento_garantia = "disponible"



           this.alquilera = data;
           Swal.fire(
            'Exito!',
            'Se ha editado la clase',
            'success'
          )
         },
         error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha ocurrido un error al editar la clase!',
            width: 600,
            padding: '3em',
            color: 'red',
            background: '#fff url(src/assets/images/222.jpg)',
            backdrop: `
            rgba( 255, 255, 255, 0.25 )
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
        }
       )
      },
      error => {
        console.error(error);
      }

    )

  }
  eliminar(id_alquiler: number){
    // this.automovilService.getPorId()

     this.alquile.deleteAlquiler(id_alquiler).subscribe(
       data=>{
         console.log(data);


         this.alquilera = data;
         Swal.fire(
          'Exito!',
          'Se ha eliminado la clase',
          'success'
        )
       }
     )

   }


}
