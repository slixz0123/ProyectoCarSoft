import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlertsService } from 'src/app/core/alerts/alerts.service';
import { Auto } from 'src/app/core/interfaces/auto';
import { Automovil } from 'src/app/core/interfaces/automovil';


import { Claseautomovil } from 'src/app/core/models/claseautomovil';

import { Usuario } from 'src/app/core/models/usuario';
import { AutomovilService } from 'src/app/shared/services/automovil.service';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';
import { FotoService } from 'src/app/shared/services/foto.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registercar',
  templateUrl: './registercar.component.html',
  styleUrls: ['./registercar.component.css'],
  template:`
  <select>
    <option *ngFor="let clase of claseauto">{{clase}}</option>
  </select>
`,
})
export class RegistercarComponent {
  autoForm!: FormGroup;
  matricula: string='';
  selectedId: Claseautomovil = new Claseautomovil();
  auto!: Auto;
  clase : Claseautomovil[]=[]
seleccionarId(event: any) {
  this.selectedId = event.target?.value ?? 0;
}
  automovil: Automovil = new Automovil;
  clasesau: Claseautomovil = new Claseautomovil; //Inicialice el objeto automovil.

  constructor(private automovilService: AutomovilService,
    private fotoService: FotoService, private toastr: ToastrService, private ClasesCarro:ClasesCarroService) {}

  file: any = '';

  foto!: any;
  values = [];


  ngOnInit(): void {
    this.automovil.num_placa = '';
    this.automovil.color = '';
    this.automovil.estado = '';
    this.automovil.marca = '';
    this.automovil.modelo = '';
    this.automovil.tipo_vehiculo = '';
    this.automovil.foto = '';
    this.automovil.matricula = '';

    this.clasesau.id_clase=0;

    localStorage.removeItem('num_placa');
    this.mostrarNotificacion();
    this.getClasesAuto();
    this.verclase();

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
onSelectChange(eventTarget: EventTarget | null) {
  const selectElement = eventTarget as HTMLSelectElement;
  if (!selectElement) {
    return; // Salimos de la función si no hay ningún elemento seleccionado
  }

  const selectedValue = selectElement.value;
  console.log(selectedValue); // muestra el valor seleccionado en la consola
  this.selectedId.id_clase = Number(selectedValue);// this.automovil.claseautomovil.id_clase = Number(selectedValue);  // llama al método sendData y pasa el valor seleccionado
}


  mostrarNotificacion() {
    this.toastr.success('Mi mensaje', 'Mi título', {
      positionClass: 'toast-top-right',
      timeOut: 3000,
    });
  }

  convertir(event: any) {
    let valor = event.target.value.toUpperCase();
    if (valor.length === 3) {
      valor += '-';
    }
    this.matricula = valor;
  }

  registrarclase() {
   // this.automovil.num_placa=this.matricula;
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

    this.foto = this.selectedFile;
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
    this.ClasesCarro.getAll().subscribe(
     claseL =>this.clase = claseL
    );}



    async loadAnimalPicture(event: any) {
      const file = event.target.files[0];
      const fileSize = file.size; // tamaño en bytes
      if (fileSize > 1048576) {
        // mensaje de error al usuario
       // this.showError('El tamaño máximo de la foto debe ser de 1 MB.');
        event.target.value = null;
      } else {

        try {
          this.automovil.foto = await this.convertToBase64(file);
        } catch (error) {
          console.error(error);
        }
      }

    }

    //carga foto
    async convertToBase64(file: File): Promise<string> {
      const reader = new FileReader();
      return new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          const result = btoa(reader.result as string);
          resolve(result);
        };
        reader.onerror = () => {
          reject(reader.error);
        };
        reader.readAsBinaryString(file);
      });
    }



    // //imtemto 2
    //  registrarclase2() {
    //   // Obtener los valores de los campos del formulario

    //   const num_placa = document.getElementById('num_placa') as HTMLInputElement;
    //   if (num_placa) {
    //     const selectedValue = num_placa.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }
    //   const modelo = document.getElementById('modelo') as HTMLInputElement;
    //   if (modelo) {
    //     const selectedValue = modelo.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }
    //   const estado = document.getElementById('estado') as HTMLInputElement;
    //   if (estado) {
    //     const selectedValue = estado.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }
    //   const color = document.getElementById('color') as HTMLInputElement;
    //   if (color) {
    //     const selectedValue = color.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }

    //   const anio = document.getElementById('anio') as HTMLInputElement;
    //   if (anio) {
    //     const selectedValue = anio.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }

    //   const marca = document.getElementById('marca') as HTMLInputElement;
    //   if (marca) {
    //     const selectedValue = marca.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }

    //   const tipo_vehiculo = document.getElementById('tipo_vehiculo') as HTMLInputElement;
    //   if (tipo_vehiculo) {
    //     const selectedValue = tipo_vehiculo.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }

    //   const foto = document.getElementById('tipo_vehiculo') as HTMLInputElement;
    //   if (foto) {
    //     const selectedValue = foto.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }


    //   const id_clase = document.getElementById('id_clase') as HTMLInputElement;
    //   if (id_clase) {
    //     const selectedValue = id_clase.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }
    //   const nombre = document.getElementById('nombre') as HTMLInputElement;
    //   if (nombre) {
    //     const selectedValue = nombre.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }
    //   const precio_alquiler_dia = document.getElementById('nombre') as HTMLInputElement;
    //   if (precio_alquiler_dia) {
    //     const selectedValue = precio_alquiler_dia.value;
    //     // Resto del código aquí
    //   } else {
    //     // Manejar el caso en el que no se encontró el elemento
    //   }


    //   // Crear un objeto de la clase de automóvil
    //   var car = {
    //     num_placa: num_placa,
    //     modelo: modelo,
    //     estado: estado,
    //     color: color,
    //     anio:anio,
    //     marca: marca,
    //     tipo_vehiculo: tipo_vehiculo,
    //     foto: foto,

    //     claseAutomovil: {
    //       id_clase: Number(id_clase),
    //       nombre:nombre,
    //       precio_alquiler_dia:precio_alquiler_dia
    //     }
    //   };

    //   // Enviar el objeto de la clase de automóvil al servidor
    //   // utilizando el método POST de la API fetch
    //   fetch("http://localhost:8080/automovil/crear", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(car)
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       alert("Automóvil registrado con éxito");
    //     } else {
    //       throw new Error("Error al registrar el automóvil");
    //     }
    //   })
    //   .catch(error => alert(error.message));
    // }


}







