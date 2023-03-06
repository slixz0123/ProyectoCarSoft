import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { RolesService } from 'src/app/shared/services/roles.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Usuario } from 'src/app/core/models/usuario';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  usuariosFiltrados: Usuario[]=[];
  buscar='';
  constructor( private personaser: PersonasService, private rolService: RolesService, private userService:UsuarioService){}
  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(usuarios => {
      this.usuariosFiltrados = usuarios.filter(usuario => usuario.rol.id_rol === 1)
    });
  }


}
