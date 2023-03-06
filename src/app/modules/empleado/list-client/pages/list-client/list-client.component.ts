import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { RolesService } from 'src/app/shared/services/roles.service';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{
  usuariosFiltrados: Usuario[]=[];
  buscar='';
constructor(private personaService: PersonasService, private usuarioService: UsuarioService, private rolService: RolesService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuariosFiltrados = usuarios.filter(usuario => usuario.rol.id_rol === 1)
    });
  }

  

  buscarUsuarioRelacionado(personaId: number, usuariosRelacionados: Usuario[]): Usuario | undefined {
    return usuariosRelacionados.find(usuario => usuario.id === personaId);
  }
}
