import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlertsService } from 'src/app/core/alerts/alerts.service';
import { Automovil } from 'src/app/core/interfaces/automovil';


import { Claseautomovil } from 'src/app/core/models/claseautomovil';

import { Usuario } from 'src/app/core/models/usuario';
import { AutomovilService } from 'src/app/shared/services/automovil.service';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';
import { FotoService } from 'src/app/shared/services/foto.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-registercar',
  templateUrl: './registercar.component.html',
  styleUrls: ['./registercar.component.css']
})
export class RegistercarComponent implements OnInit{

  automovil: Automovil = new Automovil(); //Inicialice el objeto automovil.
  clase: Claseautomovil[]= [];
  constructor(private automovilService: AutomovilService,
    private fotoService: FotoService, private toastr: ToastrService, private ClasesCarro:ClasesCarroService) {}

  file: any = '';
  selectedId = 0;
  image!: any;
  values = [];

  ngOnInit(): void {

    // this.automovil.num_placa = '';
    // this.automovil.color = '';
    // this.automovil.estado = '';
    // this.automovil.marca = '';
    // this.automovil.modelo = '';
    // this.automovil.tipo_vehiculo = '';
    // this.automovil.foto = '';
    // this.automovil.id_clase;
    // localStorage.removeItem('num_placa');
    // this.mostrarNotificacion();
    this.getClasesAuto();
  }
  crearAutomovil(): void {
   
    this.automovilService.crearAutomovil(this.automovil)
      .subscribe(automovil => {
        console.log('Se creó el automóvil', automovil);
        this.automovil = new Automovil();
      });
  }

  // registrarCarro() {
  //   if (this.automovil.num_placa === '') {
  //     this.toastr.warning("Verifique que esten correctos los campos")
  //   } else {
  //     this.automovilService.save(this.automovil).subscribe(
  //       result => {
  //         console.log(result);
  //         this.automovil = result;
  //         localStorage.setItem('num_placa', String(this.automovil.marca));
  //         this.mostrarNotificacion();
  //         this.toastr.success('Automovil registrado correctamente');
  //       },
  //       error => {
  //         console.log(error);
  //         this.toastr.error('Error al registrar automóvil');
  //       },
  //     )
  //   }
  // }

  mostrarNotificacion() {
    this.toastr.success('Mi mensaje', 'Mi título', {
      positionClass: 'toast-top-right',
      timeOut: 3000,
    });
  }



  //! ngOnInit///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  // IMAGEN

  message: string = "";
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  // CAPTURO EL ARCHIVO
  nombre_orignal: string = "";

  cap_nombre_archivo: any;
  selectedFile!: File;

  public imageSelected(event: any) {
    this.selectedFile = event.target.files[0];

    this.image = this.selectedFile;
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.file = reader.result;
    };

    console.log("Seleciono una imagen: " + event.target.value);
    this.cap_nombre_archivo = event.target.value;
    console.log("Numero de datos del nombre del archivo => " + this.cap_nombre_archivo.length)
    this.nombre_orignal = this.cap_nombre_archivo.slice(12);
    console.log("Nombre imagen original => " + this.nombre_orignal);
    console.log(this.nombre_orignal);
    this.automovil.foto = this.nombre_orignal;
  }

  cargarImagen() {
    this.fotoService.guararImagenes(this.selectedFile);
  }


getClasesAuto(){
  this.ClasesCarro.getAll().subscribe(data => {
    this.clase = data;
  });}


}
