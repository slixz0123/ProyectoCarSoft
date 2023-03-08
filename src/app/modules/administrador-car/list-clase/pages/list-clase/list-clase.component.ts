import { Component } from '@angular/core';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-clase',
  templateUrl: './list-clase.component.html',
  styleUrls: ['./list-clase.component.css']
})
export class ListClaseComponent {
buscar='';
clases: Claseautomovil[]= [];
clasea: Claseautomovil = new Claseautomovil();
constructor(private clase: ClasesCarroService){}
ngOnInit():void{
  this.clase.getAll().subscribe(
    clas=>this.clases=clas
  )
}

ClaseSeleccionada: Claseautomovil  | undefined;

seleccionarCarro(cl: Claseautomovil,id_persona:number) {
  this.ClaseSeleccionada = cl;

  this.clase.getPorId(id_persona).subscribe(
    data =>{
      console.log(data)
    }
  )
}






editarclase(clasea:Claseautomovil,id_clase:number){



  this.clase.getPorId(id_clase).subscribe(
    data =>{
      console.log(data)

     this.clase.update(clasea,id_clase).subscribe(
       data=>{
         console.log(data);

         this.clasea.nombre = data.nombre
         this.clasea.precio_alquiler_dia = data.precio_alquiler_dia


         this.clasea = data;
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





eliminar(id_clase: string){
  // this.automovilService.getPorId()

   this.clase.delete(id_clase).subscribe(
     data=>{
       console.log(data);


       this.clasea = data;
       Swal.fire(
        'Exito!',
        'Se ha eliminado la clase',
        'success'
      )
     }
   )

 }





}
