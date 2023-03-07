import { Component } from '@angular/core';
import { Claseautomovil } from 'src/app/core/models/claseautomovil';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';

@Component({
  selector: 'app-list-clase',
  templateUrl: './list-clase.component.html',
  styleUrls: ['./list-clase.component.css']
})
export class ListClaseComponent {
buscar='';
clases: Claseautomovil[]= [];
constructor(private clase: ClasesCarroService){}
ngOnInit():void{
  this.clase.getAll().subscribe(
    clas=>this.clases=clas
  )
}
}
