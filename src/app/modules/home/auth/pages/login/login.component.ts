import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/core/models/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario;
  tipoUser: any;
  user: any;
  carro: any;
 iRol: String = "";
  loginform = new FormGroup({
    nombreUsuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  usuarios: any[] = [
    { usu: 'Visita' }, { usu: 'Cliente' }, { usu: 'Empleado de empresa' }, { usu: 'Administrador de empresa' }, { usu: 'Administrador' }, { usu: 'Super administrador' },
  ];

  constructor(private toastr: ToastrService, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
   // localStorage.removeItem('id');

  }

  goToRegister($event : any) :void{

    this.router.navigate(['/register-usr'])


   }

   goToadmin() :void{

    this.router.navigate(['/admin-carsoft'])


   }
   goTocliente() :void{

    this.router.navigate(['/client-carsoft'])


   }
   goToempleado() :void{

    this.router.navigate(['/employee-carsoft'])


   }
  login(form: any) {
    this.usuarioService.login(this.usuario.nombreUsuario, this.usuario.password).subscribe(
      data => {
        console.log(data);
        if (data != null) {

          if (data.id) {
            this.usuario.id = data.id;



            this.toastr.success("Bienvenido " + data.nombreUsuario, "Login");
            localStorage.setItem('id', String(this.usuario.id));
            localStorage.setItem('nameImagen', String(this.user));

              this.iRol = data.rol.nombre_Rol;

              if(this.iRol == "ADMINISTRADOR"){
               this.goToadmin()
              }
              else if(this.iRol == "CLIENTE"){
                this.goTocliente()
              }
              else if(this.iRol == "EMPLEADO"){
               this.goToempleado()
              }

        //   location.replace('/admin-carsoft')
          } else {
            this.toastr.warning("Usuario inhabilitado, no puede ingresar!", "Advertencia!");
            this.usuario = new Usuario;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>'
            })
          }

        } else {
          this.toastr.error("USERNAME O PASSWORD INCORRECTOS!", "Login");
          this.usuario = new Usuario;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>',
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

      }
    )
  }

}
