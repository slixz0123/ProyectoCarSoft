import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil } from 'src/app/core/interfaces/automovil';
import { CargarscriptsService } from '../../../services/cargarjs.service';
import { AutomovilService } from 'src/app/shared/services/automovil.service';
import { ToastrService } from 'ngx-toastr';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css'],
  template:`
  <select>
    <option *ngFor="let clase of claseauto">{{clase}}</option>
  </select>
`,
})
export class ListCarComponent {

  auto?: Automovil[];
  modelos: Claseautomovil[]= [];
  automovil: Automovil = new Automovil(); //Inicialice el objeto automovil.
  buscar='';
  matricula: string='';
  selectedId: Claseautomovil = new Claseautomovil();
  clasesau: Claseautomovil = new Claseautomovil; //Inicialice el objeto automovil.
  clase : Claseautomovil[]=[]
  tableData: any[] = [];

  formData: any = {};

  constructor( private automovilserv: AutomovilService ,
    private automovilService: AutomovilService,
    private car: CargarscriptsService,
    private router : Router,
    private toastr: ToastrService,
    private ClasesCarro:ClasesCarroService
 ){
    { car.carga2 (["modal"])}
  }

ngOnInit(): void {
  this.automovil.num_placa = '';
  this.automovil.color = '';
  this.automovil.estado = '';
  this.automovil.marca = '';
  this.automovil.modelo = '';
  this.automovil.tipo_vehiculo = '';
  this.automovil.foto = '';

  this.clasesau.id_clase=0;
  this.getClasescombo()
  localStorage.removeItem('num_placa');
  this.mostrarNotificacion();
  this.getClasesAuto();
  this.verclase();
  this.automovilserv.listarAutos().subscribe(
    res => this.auto = res


  )

  this.editopen(this.automovil)
}


seleccionarId(event: any) {
  this.selectedId = event.target?.value ?? 0;
}

sendData(selectedValue: number) {

  const payload = { id: selectedValue };
  this.ClasesCarro.getPorId( payload).subscribe(
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


  getTableData() {
    this.automovilserv.listarAutos().subscribe((data: any[]) => {
      this.tableData = data;
    });
  }

  onSelectChange(eventTarget: EventTarget | null) {
    const selectElement = eventTarget as HTMLSelectElement;
    if (!selectElement) {
      return; // Salimos de la función si no hay ningún elemento seleccionado
    }

    const selectedValue = selectElement.value;
    console.log(selectedValue); // muestra el valor seleccionado en la consola
    this.selectedId.id_clase = Number(selectedValue);// this.automovil.claseautomovil.id_clase = Number(selectedValue);  // llama al método sendData y pasa el valor seleccionado
  }

  convertir(event: any) {
    let valor = event.target.value.toUpperCase();
    if (valor.length === 3) {
      valor += '-';
    }
    this.matricula = valor;
  }

  registrarclase() {
  //  this.automovil.num_placa=this.matricula;
    this.automovil.claseAutomovil = this.selectedId

    this.automovilService.postAutos(this.automovil).subscribe(
      data => {

        console.log( data);

          Swal.fire(
            'Exito!',
            'Registro carro',
            'success'
          )
      }

    )

}


CarroSeleccionada: Automovil  | undefined;

seleccionarCarro(auti: Automovil,num_placa:string) {
  this.CarroSeleccionada = auti;
  this.automovil.num_placa = this.automovil.num_placa
  this.automovilserv.getPorId(num_placa).subscribe(
    data =>{
      console.log(data)
    }
  )
}




  registrarCarro() {
   /* if (this.automoviles.num_placa === '') {
      this.toastr.warning("Verifique que esten correctos los campos")
    } else {
      this.automovilService.save(this.automoviles).subscribe(
        result => {
          console.log(result);
          this.automoviles = result;
          localStorage.setItem('num_placa', String(this.automoviles.marca));
          this.mostrarNotificacion();
          this.toastr.success('Automovil registrado correctamente');
        },
        error => {
          console.log(error);
          this.toastr.error('Error al registrar automóvil');
        }
      )
    }*/
  }


  mostrarNotificacion() {
    this.toastr.success('Mi mensaje', 'Mi título', {
      positionClass: 'toast-top-right',
      timeOut: 3000,
    });
  }
  getClasesAuto(){
    this.ClasesCarro.getAll().subscribe(data => {
      this.modelos = data;
    });}

    getClasescombo(){
      this.ClasesCarro.getAll().subscribe(
       claseL =>this.clase = claseL
      );}



editopen(automovil:any){
  this.formData = automovil;
}

editarauto(automovil:Automovil,num_placa:string){
  this.automovilserv.getPorId(num_placa).subscribe(
    data =>{
      console.log(data)
      this.automovil.claseAutomovil = this.selectedId
     this.automovilService.updateAutos(automovil,num_placa).subscribe(
       data=>{
         console.log(data);

         this.automovil.color = data.color
         this.automovil.anio = data.anio
         this.automovil.estado = data.estado
         this.automovil.foto = data.foto
         this.automovil.marca = data.marca
         this.automovil.matricula = data.matricula
         this.automovil.modelo = data.modelo
         this.automovil.tipo_vehiculo = data.tipo_vehiculo
         this.automovil = data;
//import Swal from 'sweetalert2';
         Swal.fire(
          'Exito!',
          'Se ha editado el automóvil',
          'success'
        )
       },
       error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un error al editar el automóvil!',
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
    }

  )

}


eliminar(num_placa: string){
 // this.automovilService.getPorId()

  this.automovilService.deleteAutos(num_placa).subscribe(
    data=>{
      console.log(data);


      this.automovil = data;
      Swal.fire(
        'Exito!',
        'Se ha eliminado el automóvil',
        'success'
      )
    }
  )

}
buscarporid(num_placa: string){
  this.automovil.num_placa = this.automovil.num_placa
  this.automovilserv.getPorId(num_placa).subscribe(
    data =>{
      console.log(data)
    }
  )

  }


  // actualizarEstado(mensaje: any) {
  //   let accion: string;
  //   let usuario: Usuario;
  //   this.serviceClientes.porId(mensaje).subscribe(data => {
  //     this.clientes = data
  //     usuario = this.clientes.usuario!;
  //     if (this.clientes.estado == true) {
  //       this.clientes.estado = false;
  //       usuario.estado = false;
  //       accion = 'Cliente Deshabilitado';
  //     } else if (this.clientes.estado == false) {
  //       this.clientes.estado = true;
  //       usuario.estado = true;
  //       accion = 'Cliente Habilitado';
  //     }
  //     console.log(this.clientes)

  //     this.usuarioService.updateUsuario(usuario, usuario.idUsuario).subscribe(
  //       result => {
  //         console.log(result);
  //         this.serviceClientes.updateclientes(this.clientes, mensaje).subscribe(data => {
  //           console.log(data)
  //           this.toastr.warning(accion, 'Advertencia!')
  //           this.listar()
  //         })
  //       }
  //     );
  //   })
  // }





}


