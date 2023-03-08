import { Component } from '@angular/core';
import { Seguro } from 'src/app/core/models/seguro';
import { SeguroService } from 'src/app/shared/services/seguro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-seguro',
  templateUrl: './list-seguro.component.html',
  styleUrls: ['./list-seguro.component.css']
})
export class ListSeguroComponent {
  buscar='';
  seguros: Seguro[]= [];
  segur: Seguro = new Seguro();

  constructor(private seguro: SeguroService){}
  ngOnInit():void{
    this.seguro.getAll().subscribe(
      clas=>this.seguros=clas
    )
  }

  seguroSeleccionada: Seguro  | undefined;

  seleccionarCarro(seg: Seguro,cod_seguro:number) {
    this.seguroSeleccionada = seg;

    this.seguro.getPorId(cod_seguro).subscribe(
      data =>{
        console.log(data)
      }
    )
  }
  editarseguro(segur:Seguro,cod_seguro:number){

    this.seguro.getPorId(cod_seguro).subscribe(
      data =>{
        console.log(data)

       this.seguro.update(segur,cod_seguro).subscribe(
         data=>{
           console.log(data);

           this.segur.nom_seguro= data.nom_seguro
           this.segur.precio_seguro = data.precio_seguro


           this.segur = data;

           Swal.fire(
            'Éxito!',
            'Se ha editado el seguro',
            'success'
          )
         },
         error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha ocurrido un error al editar el seguro!',
            width: 600,
            padding: '3em',
            color: 'red',
            background: '#fff url(assets/images/222.jpg)',
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un error al editar el seguro!',
          width: 600,
          padding: '3em',
          color: 'red',
          background: '#fff url(assets/images/222.jpg)',
          backdrop: `
          rgba( 255, 255, 255, 0.25 )
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
      }

    )

  }





  eliminar(cod_seguro: string){
    // this.automovilService.getPorId()

     this.seguro.delete(cod_seguro).subscribe(
       data=>{
         console.log(data);


         this.segur = data;
         Swal.fire(
          'Éxito!',
          'Se ha eliminado el seguro',
          'success'
        )
       }
     )

   }



}
