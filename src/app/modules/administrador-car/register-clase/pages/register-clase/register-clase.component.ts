import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';
import { Seguro } from 'src/app/core/models/seguro';

import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';
import { SeguroService } from 'src/app/shared/services/seguro.service';
import Swal from 'sweetalert2';

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
    this.claseautomovil.precio_alquiler_dia = 0;





    localStorage.removeItem('id_clase');
    localStorage.removeItem('cod_seguro');


  }

  registrarClase() {
    {
      this.ClasesCarro.post(this.claseautomovil).subscribe(
        result => {
          console.log(result);
          this.claseautomovil = result;

          Swal.fire(
            'Éxito!',
            'Se ha registrado la clase',
            'success'
          )
        },
        error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha ocurrido un error al registrar la clase!',
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
  }
  registrarSeguro() {
    
    {
      this.SeguroServi.post(this.seguro).subscribe(
        result => {
          console.log(result);
          this.seguro = result;
          localStorage.setItem('cod_seguro', String(this.seguro.cod_seguro));

          Swal.fire(
            'Éxito!',
            'Se ha registrado el seguro',
            'success'
          )
        },
        error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha ocurrido un error al registrar el seguro!',
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
  }



}
