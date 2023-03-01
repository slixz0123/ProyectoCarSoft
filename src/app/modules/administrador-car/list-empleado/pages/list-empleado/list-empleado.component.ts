import { Component } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { Usuario } from 'src/app/core/models/usuario';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent {


  person?: Persona[];
  usuario?: Usuario;

  constructor( private persona: PersonasService,private  usu:UsuarioService){}
  ngOnInit(): void {

    this.usu.getPorusr(2).subscribe(
      res => this.usuario = res
    )
    this.persona.listarPersona().subscribe(
      res => this.persona = res
    )



  }
}
