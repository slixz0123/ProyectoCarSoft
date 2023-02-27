import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';
import { Seguro } from 'src/app/core/models/seguro';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';

@Component({
  selector: 'app-register-clase',
  templateUrl: './register-clase.component.html',
  styleUrls: ['./register-clase.component.css']
})
export class RegisterClaseComponent {

  claseautomovil: Claseautomovil = new Claseautomovil();
  seguro: Seguro = new Seguro();
  constructor( private toastr: ToastrService, private ClasesCarro:ClasesCarroService) {}


  ngOnInit(): void {
    this.claseautomovil.id_clase = 0;
    this.claseautomovil.nombre = '';
    this.claseautomovil.precio_alquler_dia = 0;



    localStorage.removeItem('id_clase');


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

          this.toastr.success('Automovil registrado correctamente');
        },
        error => {
          console.log(error);
          this.toastr.error('Error al registrar automóvil');
        }
      )
    }
  }
  registrarSeguro() {
    if (this.claseautomovil.nombre === '') {
      this.toastr.warning("Verifique que esten correctos los campos")
    } else {
      this.ClasesCarro.post(this.claseautomovil).subscribe(
        result => {
          console.log(result);
          this.claseautomovil = result;
          localStorage.setItem('id_clase', String(this.claseautomovil.id_clase));

          this.toastr.success('Automovil registrado correctamente');
        },
        error => {
          console.log(error);
          this.toastr.error('Error al registrar automóvil');
        }
      )
    }
  }



}
