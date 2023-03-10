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
@Component({
  selector: 'app-generar-renta-cliente',
  templateUrl: './generar-renta-cliente.component.html',
  styleUrls: ['./generar-renta-cliente.component.css']
})
export class GenerarRentaClienteComponent {
  alquiler: Alquiler=new Alquiler;
  claseA: Claseautomovil = new Claseautomovil;
  listaseguro:Seguro[]=[];
  id: any;

  num_placa: string = '';


  nombreUsuario: any;
  nombreRol: any;
  nombreFoto: any;
  nombreLogo: any;

  isSuperAdmin: boolean = false;
  isClientAdmin: boolean = false;
  isClient: boolean = false;
  isPublic: boolean = false;

  displayMaximizable: any;
  isLogin: boolean = false;
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



    autoForm!: FormGroup;
    selectedId: Seguro = new Seguro();
    alqui: Alquiler = new Alquiler();
    selectedIc: Claseautomovil = new Claseautomovil();
    auto!: Auto;


    seleccionarId(event: any) {
    this.selectedId = event.target?.value ?? 0;
  }
    automovil: Automovil = new Automovil();
    clasesau: Claseautomovil = new Claseautomovil; //Inicialice el objeto automovil.
    usuario: Usuario = new Usuario ();



    file: any = '';

    foto!: any;
    values = [];


    ngOnInit(): void {
      this.num_placa = localStorage.getItem('num_placa') ?? '';
      this.alquiler.id_alquiler ;
      this.alquiler.documento_garantia;
      this.alquiler.fecha_finresv;
      this.alquiler.fecha_iniresv;
      this.alquiler.seguro.cod_seguro;

      this.alquiler.auto.num_placa;

      this.alquiler.usuario.id;
      this.clasesau.id_clase=0;


      this.mostrarNotificacion();
    //  this.getClasesAuto();
     // this.verclase();

      //this.getClasesAuto();
      //this.verclase();

     this.getseguro();
    // this.obtenerUsuario();
this.obtenercarro();



    }



    sendData(selectedValue: number) {

      const payload = { cod_seguro: selectedValue };
      this.segurorService.getPorId( payload).subscribe(
        (response) => {
          console.log('Solicitud POST enviada con éxito:', response);
        },
        (error) => {
          console.log('Error al enviar la solicitud POST:', error);
        }
      );
    }



  onSelectChange(eventTarget: EventTarget | null) {
    const selectElement = eventTarget as HTMLSelectElement;
    if (!selectElement) {
      return; // Salimos de la función si no hay ningún elemento seleccionado
    }

    const selectedValue = selectElement.value;
    console.log(selectedValue); // muestra el valor seleccionado en la consola
    this.selectedIc.id_clase = Number(selectedValue);// this.automovil.claseautomovil.id_clase = Number(selectedValue);  // llama al método sendData y pasa el valor seleccionado
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



    mostrarNotificacion() {
      this.toastr.success('Mi mensaje', 'Mi título', {
        positionClass: 'toast-top-right',
        timeOut: 3000,
      });
    }


    /*registaralquiler() {
     // this.automovil.claseAutomovil = this.selectedId

      this.alquilerService.postAlquiler(this.alquiler).subscribe(
        data => {

          console.log( data);

            Swal.fire(
              'Exito!',
              'Alquiler solicitado',
              'success'
            )


            }}*/

  obtenerUsuario() {
    this.id = localStorage.getItem('id');


    if (this.id != '' && this.id != undefined) {
      this.usuarioservice.getPorId(this.id).subscribe((data) => {

        console.log(data);


      });
    }
  }

  obtenercarro() {
   // this.num_placa = localStorage.getItem('num_placa');

    if (this.id != '' && this.id != undefined) {
      this.usuarioservice.getPorId(this.id).subscribe((data) => {

        console.log(data);


      });
    }
  }

  registaralquiler() {

    this.id = localStorage.getItem('id');
      this.usuarioservice.getPorId( this.id = localStorage.getItem('id')).subscribe((data) => {

        console.log(data);
        const id= data





        this.automovilService.getPorId( this.num_placa = localStorage.getItem('num_placa') ?? '').subscribe((data) => {

          console.log(data);
          const num_placa= data.num_placa;
          const id_clase= data.claseAutomovil.id_clase;
        //  this.alquiler.usuario.id = id;
        //  this.alquiler.auto.num_placa= num_placa



         this.clase.getPorId(id_clase).subscribe(
          data => {

            console.log( data);
           // this.alquiler.auto.claseAutomovil.id_clase= data.id_clase



            this.alquilerService.postAlquiler(this.alquiler).subscribe(
              data => {
             this.alquiler.usuario = id
              this.alquiler.auto.num_placa= num_placa
              this.alquiler.auto.claseAutomovil.id_clase=id_clase

                console.log( data);

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

    // getClasesAuto(){
    //   this.ClasesCarro.getAll().subscribe(
    //    claseL =>this.clase = claseL
    //   );}

      getseguro(){
        this.segurorService.getAll().subscribe(
          seguros =>this.listaseguro = seguros
        );}




  }


















