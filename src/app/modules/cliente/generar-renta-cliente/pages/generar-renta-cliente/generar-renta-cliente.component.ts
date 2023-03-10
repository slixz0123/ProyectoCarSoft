import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Auto } from 'src/app/core/interfaces/auto';
import { Automovil } from 'src/app/core/interfaces/automovil';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';
import { AutomovilService } from 'src/app/shared/services/automovil.service';
import { AlquilerService } from 'src/app/shared/services/alquiler.service';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';
import { FotoService } from 'src/app/shared/services/foto.service';
import Swal from 'sweetalert2';


import { CargarscriptsService } from '../../../services/cargarjs.service';
import { Alquiler } from 'src/app/core/models/alquiler';
import { Seguro } from 'src/app/core/models/seguro';
import { SeguroService } from 'src/app/shared/services/seguro.service';
import { Usuario } from 'src/app/core/models/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-generar-renta-cliente',
  templateUrl: './generar-renta-cliente.component.html',
  styleUrls: ['./generar-renta-cliente.component.css']
})
export class GenerarRentaClienteComponent {
  alquiler: Alquiler=new Alquiler();
  listaseguro:Seguro[]=[];
  id: any;
  num_placa: string = '';
  selectedId: Seguro = new Seguro();

  constructor(
    private car: CargarscriptsService,
    private automovilService: AutomovilService,
      private fotoService: FotoService,
      private toastr: ToastrService,
       private ClasesCarro:ClasesCarroService,
       private alquilerService:AlquilerService,
       private segurorService:SeguroService,
       private usuarioservice :UsuarioService,
       private clase :ClasesCarroService


  )

  {
    {

      car.carga2(["Calculardias"]);


    }
  }


    ngOnInit(): void {



      this.num_placa = localStorage.getItem('num_placa') ?? '';
      this.id = localStorage.getItem('id');
      this.alquiler.id_alquiler ;
      this.alquiler.documento_garantia;

      this.alquiler.fecha_finresv;
      this.alquiler.fecha_iniresv;
      this.alquiler.seguro.cod_seguro;
      this.alquiler.automovil.num_placa;
      this.alquiler.usuarios.id;

     this.getseguro();



    }
    seleccionarId(event: any) {
      this.selectedId = event.target?.value ?? 0;
    }


  onSelectChangesegur(eventTarget: EventTarget | null) {
    const selectElement = eventTarget as HTMLSelectElement;
    if (!selectElement) {
      return; // Salimos de la función si no hay ningún elemento seleccionado
    }
    const selectedValue = selectElement.value;
    console.log(selectedValue); // muestra el valor seleccionado en la consola
    this.selectedId.cod_seguro = Number(selectedValue);// this.automovil.claseautomovil.id_clase = Number(selectedValue);  // llama al método sendData y pasa el valor seleccionado
  }


  registaralquiler() {

    this.id = localStorage.getItem('id');
      this.usuarioservice.getPorId( this.id = localStorage.getItem('id')).subscribe((data) => {

        console.log(data.nombreUsuario + "registaralquiler");
        const id= data

        this.automovilService.getPorId( this.num_placa = localStorage.getItem('num_placa') ?? '').subscribe((data) => {

          console.log(data.num_placa + "registaralquiler");
          const num_placa= data.num_placa;
          const id_clase= data.claseAutomovil.id_clase;

        //  this.alquiler.usuario.id = id;
        //  this.alquiler.auto.num_placa= num_placa

         this.clase.getPorId(id_clase).subscribe(
          data => {
            console.log(data.nombre + "registaralquiler");
           // this.alquiler.auto.claseAutomovil.id_clase= data.id_clase
           this.alquiler.usuarios = id
           this.alquiler.automovil.num_placa= num_placa
           this.alquiler.automovil.claseAutomovil.id_clase=id_clase

            this.alquilerService.postAlquiler(this.alquiler).subscribe(
              data => {
              console.log(data );
              const seguro = data.seguro
              this.alquiler.seguro = seguro
                this.alquiler = data
                  Swal.fire(
                    'Exito!',
                    'Alquiler solicitado',
                    'success'
                  )
              }
            )
          }
        )
        });

      });

}


      getseguro(){
        this.segurorService.getAll().subscribe(
          seguros =>this.listaseguro = seguros
        );}



  }



















