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


  usuariosFiltrados: Usuario[]=[];
  buscar='';
  usuario: Usuario = new Usuario();
  persona: Persona = new Persona();
  constructor( private personaser: PersonasService,private  userService:UsuarioService){}
  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(usuarios => {
      this.usuariosFiltrados = usuarios.filter(usuario => usuario.rol.id_rol === 2)
    });
  }

  userSeleccionada: Usuario  | undefined;

  seleccionarUsuario(usua: Usuario,id:number) {
    this.userSeleccionada = usua;

    this.userService.getPorId(id).subscribe(
      data =>{
        console.log(data)
      }
    )
  }

  buscarporid(id: string){

    this.userService.getPorId(id).subscribe(
      data =>{
        console.log(data)
      }
    )

    }


  editarusuario(persona:Persona ,usuario:Usuario,id:number){



    this.userService.getPorId(id).subscribe(
      data =>{
        console.log(data)
        const idper = data.persona.id_persona
        const per =  data.persona

       this.userService.updateUsuario(usuario,id).subscribe(
         data=>{

           console.log(data);


           this.usuario.nombreUsuario = data.nombreUsuario
           this.usuario.password = data.password
           this.usuario = data;
         },
         error => {
          console.error(error);
        }
       )
       this.personaser.updatePersona( persona, idper).subscribe(
        data=>{
          console.log(data)
          this.persona.nombre = data.nombre
          this.persona.apellido = data.apellido
          this.persona.ciudad = data.ciudad
          this.persona.correo = data.correo
          this.persona.direccion = data.direccion
          this.persona.genero = data.genero
          this.persona.telefono = data.telefono
        }
       )
      },
      error => {
        console.error(error);
      }

    )

  }






}
