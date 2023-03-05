import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil } from 'src/app/core/interfaces/automovil';
import { CargarscriptsService } from '../../../services/cargarjs.service';
import { AutomovilService } from 'src/app/shared/services/automovil.service';
import { ToastrService } from 'ngx-toastr';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';


@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent {

  auto?: Automovil[];
  modelos: Claseautomovil[]= [];
  automoviles: Automovil = new Automovil(); //Inicialice el objeto automovil.
  constructor( private automovil: AutomovilService ,
      private automovilService: AutomovilService,
      private car: CargarscriptsService,
      private router : Router,
      private toastr: ToastrService,
      private ClasesCarro:ClasesCarroService
   ){
      { car.carga2 (["modal"])}
    }

  ngOnInit(): void {
    this.automoviles.num_placa = '';
    this.automoviles.color = '';
    this.automoviles.estado = '';
    this.automoviles.marca = '';
    this.automoviles.modelo = '';
    this.automoviles.tipo_vehiculo = '';
    this.automoviles.foto = '';
    this.automoviles.claseAutomovil;

    localStorage.removeItem('num_placa');
    this.mostrarNotificacion();
    this.getClasesAuto();
    this.automovil.listarAutos().subscribe(
      res => this.auto = res
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


editarauto(){
  this.automovilService.updateAutos(this.automoviles,this.automoviles.num_placa).subscribe(
    data=>{
      console.log(data);


      this.automoviles = data;
    }
  )
}


}
