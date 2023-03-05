import { Component } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { Usuario } from 'src/app/core/models/usuario';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Rol } from 'src/app/core/models/rol';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent {


  usuariosFiltrados: Usuario[]=[];
  buscar='';

  constructor( private persona: PersonasService,private  usu:UsuarioService){}
  ngOnInit(): void {
    this.usu.getUsuarios().subscribe(usuarios => {
      this.usuariosFiltrados = usuarios.filter(usuario => usuario.rol.id_rol === 2)
    });
  }
}
