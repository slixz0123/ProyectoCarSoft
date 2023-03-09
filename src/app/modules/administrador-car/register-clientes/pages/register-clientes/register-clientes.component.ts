import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/core/models/persona';
import { Rol } from 'src/app/core/models/rol';
import { Usuario } from 'src/app/core/models/usuario';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { RolesService } from 'src/app/shared/services/roles.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-clientes',
  templateUrl: './register-clientes.component.html',
  styleUrls: ['./register-clientes.component.css']
})
export class RegisterClientesComponent {
  rol: Rol = new Rol;

  persona: Persona = new Persona;
  usuario: Usuario = new Usuario;

  verfNombres: any;
  verfApellidos: any;
  verfCorreo: any;
  verfUsername: any;
  verfPassword: any;

  verfcedula: any;
  verfciudad: any;
  verfdireccion: any;
  verftelefono: any;
  verfedad: any;

  expCorreo: RegExp = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  valCorreo: boolean = true;

  constructor(private toastr: ToastrService, private personaService: PersonasService, private usuarioService: UsuarioService, private rolService: RolesService, private router: Router) { }

  ngOnInit(): void {
    this.persona.apellido = '';
    this.persona.cedula = '';
    this.persona.ciudad = '';
    this.persona.correo = '';
    this.persona.direccion = '';
    this.persona.edad = 0;
    this.persona.genero = '';
    this.persona.id_persona = 0;
    this.persona.nombre = '';
    this.persona.telefono = '';

    this.usuario.nombreUsuario = '';
    this.usuario.password = '';
    localStorage.removeItem('id');
    this.mostrarNotificacion();
  }

  validarCorreo() {
    this.valCorreo = this.expCorreo.test(this.persona.correo!);
    if (this.valCorreo) {
      this.verfCorreo = '';
    } else {
      this.verfCorreo = 'ng-invalid ng-dirty';
    }
  }

  registrarUsuario() {
    if (this.persona.apellido === '' || this.persona.apellido === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo apellido vacío!',
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

    if (this.persona.cedula === '' || this.persona.cedula === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo cédula vacío!',
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
    if (this.persona.ciudad === '' || this.persona.ciudad === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo ciudad vacío!',
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
    if (this.persona.correo === '' || this.persona.correo === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo correo vacío!',
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
    if (this.persona.direccion === '' || this.persona.direccion === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo dirección vacío!',
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

   /*
    if (this.persona.genero ==='' || this.persona.genero === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo edad vacio!", "Error!");
    }
*/

    if (this.persona.nombre === '' || this.persona.nombre === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo nombre vacío!',
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

    if (this.persona.telefono === '' || this.persona.telefono === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo teléfono vacío!',
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
    if (this.usuario.nombreUsuario === '' || this.usuario.nombreUsuario === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo usuario vacío!',
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

    if (this.usuario.password === '' || this.usuario.password === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campo contraseña vacío!',
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





    if (this.persona.apellido === '') {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error al registrar el cliente!',
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
    } else {

      this.usuarioService.verfUsername(this.usuario.nombreUsuario).subscribe(
        data => {
          if (!data) {

           // this.persona.usuario?.id = this.usuario.id;

            this.personaService.postPersona(this.persona).subscribe(
              data => {
                console.log(data);
                const id_persona = data.id_persona;
                const id_u = data.usuario?.id


                this.rolService.getByName('CLIENTE').subscribe(
                  data => {
                    console.log(data);
                     const rolId = data.id_rol;
                     this.usuario.rol.id_rol = rolId; //asignacion de id
                     this.usuario.persona.id_persona =id_persona //asignacion id persona a la tabla usuario
                     localStorage.setItem('id', String(this.usuario.id));

                     this.usuarioService.postUsuario(this.usuario).subscribe(
                      result => {
                        console.log(result);

                          console.log(  result.id)

                        this.usuario = result;
                        localStorage.setItem('idUsuario', String(this.usuario.nombreUsuario));
                        this.mostrarNotificacion();
                        Swal.fire(
                          'Exito!',
                          'Registro clase',
                          'success'
                        )

                       //location.replace('/df');
                      }

                    )
                  }
                )

              }

            )


          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ha ocurrido un error al editar el cliente!',
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
            this.verfUsername = 'ng-invalid ng-dirty';
            this.usuario.nombreUsuario = '';
          }
        }
      )
    }
  }

  mostrarNotificacion() {
    this.toastr.success('Mi mensaje', 'Mi título', {
      positionClass: 'toast-top-right',
      timeOut: 3000,
    });
  }

}
