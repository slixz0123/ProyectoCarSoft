import { Component } from '@angular/core';
import { Persona } from 'src/app/core/models/persona';
import { Usuario } from 'src/app/core/models/usuario';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import Swal from 'sweetalert2';

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
           Swal.fire(
            'Éxito!',
            'Se ha editado el empleado',
            'success'
          )
         },
         error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha ocurrido un error al editar el empleado!',
            width: 600,
            padding: '3em',
            color: 'red',
            background: '#fff url(assets/images/222.jpg)',
            backdrop: `
            rgba( 255, 255, 255, 0.25 )
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
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
          Swal.fire(
            'Éxito!',
            'Se ha editado el empleado',
            'success'
          )
        }
       )
      },
      error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un error al editar el empleado!',
          width: 600,
          padding: '3em',
          color: 'red',
          background: '#fff url(assets/images/222.jpg)',
          backdrop: `
          rgba( 255, 255, 255, 0.25 )
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
      }

    )

  }


  eliminar(id_persona: number,id:number){
    // this.automovilService.getPorId()

    this.userService.deleteUsuario(id).subscribe(
      data=>{
        console.log(data);


        this.usuario = data;
        Swal.fire(
          'Éxito!',
          'Se ha editado el empleado',
          'success'
        )
      }
    )
    this.personaser.deletePersona(id_persona).subscribe(
      data=>{
        console.log(data);


        this.persona = data;
        Swal.fire(
          'Éxito!',
          'Se ha editado el empleado',
          'success'
        )
      }
    )

  }



}
