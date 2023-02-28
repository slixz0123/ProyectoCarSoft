import { Component } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { PersonasService } from 'src/app/shared/services/personas.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent {


  person?: Persona[];

  constructor( private persona: PersonasService){}
  ngOnInit(): void {

    this.persona.getPersonas().subscribe(
      res => this.person = res
    )


  }
}
