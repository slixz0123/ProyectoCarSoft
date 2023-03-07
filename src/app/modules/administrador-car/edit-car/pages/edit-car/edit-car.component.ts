import { Component } from '@angular/core';
import { Automovil } from 'src/app/core/interfaces/automovil';
import { AutomovilService } from 'src/app/shared/services/automovil.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent {
  matricula: string='';
  automovil: Automovil =new Automovil;
  constructor(private automovilService: AutomovilService){}
  ngOnInit(): void {}

  convertir(event: any) {
    let valor = event.target.value.toUpperCase();
    if (valor.length === 3) {
      valor += '-';
    }
    this.matricula = valor;
  }
}
