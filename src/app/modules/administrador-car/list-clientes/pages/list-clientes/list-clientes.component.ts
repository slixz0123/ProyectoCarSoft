import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { Rol } from 'src/app/core/models/rol';
import { RolesService } from 'src/app/shared/services/roles.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {
  person?: Persona[];
  personas:Persona[]=[];
  roles:Rol[]=[];
  buscar='';
  constructor( private persona: PersonasService, private rolService: RolesService){}
  ngOnInit(): void {

    this.persona.getPersonas().subscribe(
      res => this.person = res
    )

      this.listaRol();
  }

  listaRol(){
    this.rolService.getAll().subscribe(
      listrol=>this.roles=listrol
    );
  }
}
