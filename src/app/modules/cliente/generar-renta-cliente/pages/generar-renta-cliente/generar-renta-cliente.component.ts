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
import { DataService } from 'src/app/shared/services/DataService';
import { Reserva } from 'src/app/core/models/reserva';
import { ReservaService } from 'src/app/shared/services/reserva.service';
@Component({
  selector: 'app-generar-renta-cliente',
  templateUrl: './generar-renta-cliente.component.html',
  styleUrls: ['./generar-renta-cliente.component.css']
})
export class GenerarRentaClienteComponent {
  alquiler: Reserva=new Reserva;
  listaseguro:Seguro[]=[];
  id: any;
  automoviles: Automovil[]=[];

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
       private reservaService:ReservaService,
       private segurorService:SeguroService,
       private usuarioservice :UsuarioService,private dataService: DataService

  )

  {
    {

      car.carga2(["Calculardias"]);


    }
  }

  // {
  //   "id_alquiler": 0,
  //   "num_dias_alquiler": "string",
  //   "fecha_salida": "2023-03-05T06:44:33.344Z",
  //   "prox_fecha_entrega": "2023-03-05T06:44:33.344Z",
  //   "documento_garantia": "string",
  //   "comprobante": {
  //     "cod_comp": 0,
  //     "descripcion": "string",
  //     "precio": 0
  //   },
  //     "seguro": {
  //       "cod_seguro": 0,
  //       "nom_seguro": "string",
  //       "precio_seguro": 0
  //     },
  //     "alquileres": "string"
  //   },
  //   "usuarios": {
  //     "id": 0,
  //     "nombreUsuario": "string",
  //     "password": "string",
  //     "persona": {
  //       "id_persona": 0,
  //       "nombre": "string",
  //       "apellido": "string",
  //       "cedula": "string",
  //       "direccion": "string",
  //       "telefono": "string",
  //       "correo": "string",
  //       "edad": 0,
  //       "ciudad": "string",
  //       "genero": "string",
  //       "foto": "string"
  //     },
  //     "rol": {
  //       "id_rol": 0,
  //       "nombre_Rol": "string"
  //     }
  //   },
  //   "seguro": {
  //     "cod_seguro": 0,
  //     "nom_seguro": "string",
  //     "precio_seguro": 0
  //   }
  // }


  //   autoForm!: FormGroup;
  //   selectedId: Claseautomovil = new Claseautomovil();
  //   auto!: Auto;
  //   clase : Claseautomovil[]=[]
  //   seleccionarId(event: any) {
  //   this.selectedId = event.target?.value ?? 0;
  // }
  //   automovil: Automovil = new Automovil;
  //   clasesau: Claseautomovil = new Claseautomovil; //Inicialice el objeto automovil.
    autoForm!: FormGroup;
    selectedId: Seguro = new Seguro();
    alqui: Alquiler = new Alquiler();
    selectedIc: Claseautomovil = new Claseautomovil();
    auto!: Auto;


    seleccionarId(event: any) {
    this.selectedId = event.target?.value ?? 0;
  }
    automovil: Automovil = new Automovil;
    clasesau: Claseautomovil = new Claseautomovil; //Inicialice el objeto automovil.
    usuario: Usuario = new Usuario;



  //   file: any = '';

  //   foto!: any;
  //   values = [];


    ngOnInit(): void {
<<<<<<< Updated upstream
      this.alquiler.cod_reserva;
      this.alquiler.alquiler?.documento_garantia;
      this.alquiler.fecha_finresv;
      this.alquiler.fecha_iniresv;
      this.alquiler.forma_pago;
      this.alquiler.automovil?.num_placa;
      this.alquiler.usuarios?.id;
      //this.clasesau.id_clase=0;
=======
      this.num_placa = localStorage.getItem('num_placa') ?? '';
      this.alquiler.id_alquiler;
      this.alquiler.documento_garantia;
      this.alquiler.fecha_salida;
      this.alquiler.prox_fecha_entrega;
      this.alquiler.Seguro.cod_seguro;
      this.alquiler.rol.id_rol;
      this.alquiler.usuario.id;
      this.clasesau.id_clase=0;
>>>>>>> Stashed changes


      this.mostrarNotificacion();
<<<<<<< Updated upstream
     // this.getClasesAuto();
     // this.verclase();
     this.getseguro();
     this.obtenerUsuario();
=======
    //  this.getClasesAuto();
     // this.verclase();
     this.getseguro();
    // this.obtenerUsuario();
this.obtenercarro();
     this.registaralquiler() ;


>>>>>>> Stashed changes
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



  //  verclase(){


  //   this.ClasesCarro.getAll().subscribe(
  //    result => {
  // console.log(result)



  //      // this.usuario.persona.id_persona =id_persona //asignacion id persona a la tabla usuario
  //    }
  //  )
  //  this.ClasesCarro.getPorId(this.clasesau.id_clase).subscribe(
  //   result => {
  // console.log(result)


  //     // this.usuario.persona.id_persona =id_persona //asignacion id persona a la tabla usuario
  //   }
  // )
 // }
  // onSelectChange(eventTarget: EventTarget | null) {
  //   const selectElement = eventTarget as HTMLSelectElement;
  //   if (!selectElement) {
  //     return; // Salimos de la función si no hay ningún elemento seleccionado
  //   }

<<<<<<< Updated upstream
  //   const selectedValue = selectElement.value;
  //   console.log(selectedValue); // muestra el valor seleccionado en la consola
  //   this.selectedId.id_clase = Number(selectedValue);// this.automovil.claseautomovil.id_clase = Number(selectedValue);  // llama al método sendData y pasa el valor seleccionado
  // }
      // this.usuario.persona.id_persona =id_persona //asignacion id persona a la tabla usuario
=======
  //     // this.usuario.persona.id_persona =id_persona //asignacion id persona a la tabla usuario
>>>>>>> Stashed changes
  //   }
  // )
  // }


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

    // registaralquiler() {
    //  // this.automovil.claseAutomovil = this.selectedId

    //   this.alquilerService.postAlquiler(this.alquiler).subscribe(
    //     data => {

    //       console.log( data);

    //         Swal.fire(
    //           'Exito!',
    //           'Alquiler solicitado',
    //           'success'
    //         )
    //       }}


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

<<<<<<< Updated upstream
    this.alquiler.seguro = this.selectedId;
    this.alquiler.usuarios!.id = this.id;
    this.num_placa = localStorage.getItem('num_placa');

    this.reservaService.save(this.alquiler).subscribe(
      data => {

        console.log( data);

          Swal.fire(
            'Exito!',
            'Alquiler solicitado',
            'success'
          )
=======
    this.id = localStorage.getItem('id');
>>>>>>> Stashed changes




      this.usuarioservice.getPorId(this.id).subscribe((data) => {

        console.log(data);
        console.log("registaralquiler")
        this.alqui.usuario.id = data.id

        this.automovilService.getPorId( this.num_placa = localStorage.getItem('num_placa') ?? '').subscribe((data) => {

          console.log(data);
          this.alqui.auto.num_placa = data.num_placa



        });


      });

    // this.alquilerService.postAlquiler(this.alquiler).subscribe(
    //   data => {

    //     console.log( data);

    //       Swal.fire(
    //         'Exito!',
    //         'Alquiler solicitado',
    //         'success'
    //       )


    //   }

    // )

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


















