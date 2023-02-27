import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';
import { Seguro } from 'src/app/core/models/seguro';

import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';
import { SeguroService } from 'src/app/shared/services/seguro.service';

@Component({
  selector: 'app-register-clase',
  templateUrl: './register-clase.component.html',
  styleUrls: ['./register-clase.component.css']
})
export class RegisterClaseComponent {
  seguro: Seguro = new Seguro();
  claseautomovil: Claseautomovil = new Claseautomovil();

  constructor( private toastr: ToastrService, private ClasesCarro:ClasesCarroService , private SeguroServi:SeguroService) {}


  ngOnInit(): void {
    this.claseautomovil.id_clase = 0;
    this.claseautomovil.nombre = '';
    this.claseautomovil.precio_alquler_dia = 0;
    this.seguro.cod_seguro= 0;
    this.seguro.nom_seguro= '';
    this.seguro.precio_seguro= '';



    localStorage.removeItem('id_clase');
    localStorage.removeItem('cod_seguro');


  }
  registrarClase() {
    if (this.claseautomovil.nombre === '') {
      this.toastr.warning("Verifique que esten correctos los campos")
    } else {
      this.ClasesCarro.post(this.claseautomovil).subscribe(
        result => {
          console.log(result);
          this.claseautomovil = result;
          localStorage.setItem('id_clase', String(this.claseautomovil.id_clase));

          this.toastr.success('seguro registrado correctamente');
        },
        error => {
          console.log(error);
          this.toastr.error('Error al registrar seguro');
        }
      )
    }
  }
  registrarSeguro() {
    if (this.seguro.nom_seguro === '') {
      this.toastr.warning("Verifique que esten correctos los campos")
    } else {
      this.SeguroServi.post(this.seguro).subscribe(
        result => {
          console.log(result);
          this.seguro = result;
          localStorage.setItem('cod_seguro', String(this.seguro.cod_seguro));

          this.toastr.success('seguro registrado correctamente');
        },
        error => {
          console.log(error);
          this.toastr.error('Error al registrar seguro');
        }
      )
    }
  }



}
