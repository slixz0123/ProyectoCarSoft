import { Component } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { PersonasService } from 'src/app/shared/services/personas.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent {
  person?: Persona[];

  constructor( private persona: PersonasService){}
  ngOnInit(): void {

    this.persona.getPersonas().subscribe(
      res => this.person = res
    )


  }
}
