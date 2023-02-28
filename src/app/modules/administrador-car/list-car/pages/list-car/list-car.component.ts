import { Component } from '@angular/core';
import { Automovil } from 'src/app/core/interfaces/automovil';
import { AutomovilService } from 'src/app/shared/services/automovil.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent {

  auto?: Automovil[];

  constructor( private automovil: AutomovilService){}
  ngOnInit(): void {

    this.automovil.listarAutos().subscribe(
      res => this.auto = res
    )


  }
}
