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
  listaseguro:Seguro[]=[];
  id: any;

  num_placa: any;

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
       private usuarioservice :UsuarioService




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


    autoForm!: FormGroup;
    selectedId: Seguro = new Seguro();
    selectedIc: Claseautomovil = new Claseautomovil();
    auto!: Auto;
    clase : Claseautomovil[]=[]

    seleccionarId(event: any) {
    this.selectedId = event.target?.value ?? 0;
  }
    automovil: Automovil = new Automovil;
    clasesau: Claseautomovil = new Claseautomovil; //Inicialice el objeto automovil.
    usuario: Usuario = new Usuario;



    file: any = '';

    foto!: any;
    values = [];


    ngOnInit(): void {
      this.alquiler.id_alquiler;
      this.alquiler.documento_garantia;
      this.alquiler.fecha_salida;
      this.alquiler.prox_fecha_entrega;
      this.alquiler.Seguro.cod_seguro;
      this.alquiler.rol.id_rol;
      this.alquiler.usuario.id;
      this.clasesau.id_clase=0;

      localStorage.removeItem('num_placa');
      this.mostrarNotificacion();
      this.getClasesAuto();
      this.verclase();
     this.getseguro();
     this.obtenerUsuario();

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



   verclase(){


    this.ClasesCarro.getAll().subscribe(
     result => {
  console.log(result)



       // this.usuario.persona.id_persona =id_persona //asignacion id persona a la tabla usuario
     }
   )
   this.ClasesCarro.getPorId(this.clasesau.id_clase).subscribe(
    result => {
  console.log(result)



      // this.usuario.persona.id_persona =id_persona //asignacion id persona a la tabla usuario
    }
  )
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




  obtenerUsuario() {
    this.id = localStorage.getItem('id');


    if (this.id != '' && this.id != undefined) {
      this.usuarioservice.getPorId(this.id).subscribe((data) => {
        console.log("estoy antes generar renta ")
        console.log(data);
        console.log("estoy en generar renta ")

      });
    }
  }

  registaralquiler() {

    this.alquiler.Seguro = this.selectedId;
    this.alquiler.usuario.id = this.id;
    this.num_placa = localStorage.getItem('num_placa');

    this.alquilerService.postAlquiler(this.alquiler).subscribe(
      data => {

        console.log( data);

          Swal.fire(
            'Exito!',
            'Alquiler solicitado',
            'success'
          )


      }

    )

}

    getClasesAuto(){
      this.ClasesCarro.getAll().subscribe(
       claseL =>this.clase = claseL
      );}

      getseguro(){
        this.segurorService.getAll().subscribe(
          seguros =>this.listaseguro = seguros
        );}




  }


















