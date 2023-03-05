import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { Rol } from 'src/app/core/models/rol';
import { RolesService } from 'src/app/shared/services/roles.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from 'src/app/core/models/usuario';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {
  persona?: Persona[];
  user?:Usuario[];
  personas:Persona[]=[];
  roles:Rol[]=[];
  usuarios:Usuario[]=[];
  idrol?:number;
  buscar='';
  constructor( private personaser: PersonasService, private rolService: RolesService, private userService:UsuarioService){}
  ngOnInit(): void {
    this.idrol=1;
    this.personaser.getPersonas().subscribe((res: Persona[])=>{
    this.personas = res;
  });

      this.listaRol();
      this.listaUser();
  }

  listaRol(){
    this.rolService.getAll().subscribe(
      listrol=>this.roles=listrol
    );
  }

  listaUser(){
    this.userService.getUsuarios().subscribe(
      listus=>this.usuarios=listus
    );
  }
}
