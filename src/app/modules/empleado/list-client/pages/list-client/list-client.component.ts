import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { Usuario } from 'src/app/core/models/usuario';
import { Rol } from 'src/app/core/models/rol';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { RolesService } from 'src/app/shared/services/roles.service';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{
  personas:Persona[]=[];
  usuarios:Usuario[]=[];
  roles:Rol[]=[];
  buscar='';
constructor(private personaService: PersonasService, private usuarioService: UsuarioService, private rolService: RolesService) { }

  ngOnInit(): void {
    this.listaPersona();
    this.listaUsu();
    this.listaRol();
  }

  listaPersona(){
    this.personaService.getPersonas().subscribe(
      listp=>this.personas=listp
    );
  }

  listaUsu(){
    this.usuarioService.getUsuarios().subscribe(
      listu=>this.usuarios=listu
    );
  }

  listaRol(){
    this.rolService.getAll().subscribe(
      listrol=>this.roles=listrol
    );
  }

  buscarUsuarioRelacionado(personaId: number, usuariosRelacionados: Usuario[]): Usuario | undefined {
    return usuariosRelacionados.find(usuario => usuario.id === personaId);
  }
}
