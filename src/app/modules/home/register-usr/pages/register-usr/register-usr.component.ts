import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/core/models/persona';
import { Rol } from 'src/app/core/models/rol';
import { Usuario } from 'src/app/core/models/usuario';
import { PersonasService } from 'src/app/shared/services/personas.service';
import { RolesService } from 'src/app/shared/services/roles.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-register-usr',
  templateUrl: './register-usr.component.html',
  styleUrls: ['./register-usr.component.css']
})
export class RegisterUsrComponent {

  rol: Rol = new Rol;



  persona: Persona = new Persona;
  usuario: Usuario = new Usuario;
  listausuarios:Usuario []=[];
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

  expCorreo: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  valCorreo: boolean = true;

  constructor(private toastr: ToastrService, private personaService: PersonasService, private usuarioService: UsuarioService, private rolService: RolesService, private router: Router) {


  }






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
      this.toastr.error("Campo apellido vacio!", "Error!");
    }

    if (this.persona.cedula === '' || this.persona.cedula === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo cedula vacio!", "Error!");
    }
    if (this.persona.ciudad === '' || this.persona.ciudad === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo ciudad vacio!", "Error!");
    }
    if (this.persona.correo === '' || this.persona.correo === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo correo vacio!", "Error!");
    }
    if (this.persona.direccion === '' || this.persona.direccion === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo direccion vacio!", "Error!");
    }

   /*
    if (this.persona.genero ==='' || this.persona.genero === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo edad vacio!", "Error!");
    }
*/

    if (this.persona.nombre === '' || this.persona.nombre === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo nombres vacio!", "Error!");
    }

    if (this.persona.telefono === '' || this.persona.telefono === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo nombres vacio!", "Error!");
    }
    if (this.usuario.nombreUsuario === '' || this.usuario.nombreUsuario === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo usuario vacio!", "Error!");
    }

    if (this.usuario.password === '' || this.usuario.password === null) {
      this.verfNombres = 'ng-invalid ng-dirty';
      this.toastr.error("Campo contraseña vacio!", "Error!");
    }





    if (this.persona.apellido === '') {

      this.toastr.warning("Verifique que esten correctos los campos")
    } else {
      this.usuarioService.verfUsername(this.usuario.nombreUsuario).subscribe(
        data => {
          if (!data) {
            if (this.persona.usuario?.id) {
              this.persona.usuario.id =  this.usuario.id ;
            }else{
              console.log("error :");
            }
            this.personaService.postPersona(this.persona).subscribe(
              data => {
                console.log(data);
                const id_persona = data.id_persona;


               // this.persona.id_usuario= this.persona.id_persona
                this.rolService.getByName('CLIENTE').subscribe(
                  data => {
                    console.log(data);

                   // this.rol.id_rol = data.id_rol;
                   // this.rol.nombre_rol = data.nombre_rol;
                     const rolId = data.id_rol;


                     this.usuario.rol.id_rol = rolId; //asignacion de id

                     this.usuario.persona.id_persona =id_persona //asignacion id persona a la tabla usuario

                    this.usuarioService.postUsuario(this.usuario).subscribe(
                      result => {
                        console.log(result);
                       // this.usuario.persona.id_persona  = id_persona;



                        this.usuario = result;
                        localStorage.setItem('idUsuario', String(this.usuario.nombreUsuario));
                        this.mostrarNotificacion();
                        this.toastr.success('Usuario registrado correctamente', 'Bienvenido!')

                       //location.replace('/df');
                      }
                    )
                  }
                )
              }
            )
          } else {
            this.toastr.error("El username que eligio ya está en uso!", "Error");
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




// public loginUser(): void {


//   if (this.login.username.trim() == '' || this.login.username.trim() == null) {
//     this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
//       duration: 3000
//     })
//     return;
//   }

//   if (this.login.password.trim() == '' || this.login.password.trim() == null) {
//     this.snack.open('La contraseña es requerida !!', 'Aceptar', {
//       duration: 3000
//     })
//     return;
//   }

//   this.loginService.generateToken(this.login).subscribe(
//     (data: any) => {
//       console.log(data);
//       this.loginService.loginUser(data.token);
//       this.loginService.getCurrentUser().subscribe((user: any) => {
//         this.loginService.setUser(user);
//         console.log(user);

//         if (this.loginService.getUserRole() == 'COORDINADOR') {
//           this.router.navigate(['/cordPrac']);
//           this.loginService.loginStatusSubjec.next(true);
//         }
//         else if (this.loginService.getUserRole() == 'ESTUDIANTE') {
//           this.router.navigate(['/estudiante']);
//           this.loginService.loginStatusSubjec.next(true);
//         }
//         else if (this.loginService.getUserRole() == 'DOCENTE TUTOR') {
//           this.router.navigate(['/tutorAc']);
//           this.loginService.loginStatusSubjec.next(true);
//         }
//         else if (this.loginService.getUserRole() == 'RESPONSABLE PRACTICAS') {
//           this.router.navigate(['/representante']);
//           this.loginService.loginStatusSubjec.next(true);
//         }
//         else if (this.loginService.getUserRole() == 'RESPONSABLE EMPRESA') {
//           this.router.navigate(['/tutorEm']);
//           this.loginService.loginStatusSubjec.next(true);
//         }
//         else {
//           this.loginService.logout();
//         }
//       })
//     }, (error) => {
//       console.log(error);
//       this.snack.open('Detalles inválidos , vuelva a intentar !!', 'Aceptar', {
//         duration: 3000
//       })
//     }
//   )
// }
