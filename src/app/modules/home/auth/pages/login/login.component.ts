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
  errorStatus:boolean = false;
  errorMsj:any = "";

  loginform = new FormGroup({
    nombreUsuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })



 usuarios: any[] = [
   { usu: 'Visita' }, { usu: 'Cliente' }, { usu: 'Empleado de empresa' }, { usu: 'Administrador de empresa' }, { usu: 'Administrador' }, { usu: 'Super administrador' },
];

  constructor(private toastr: ToastrService, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('id');


  }
  // onLogin(form:any){
  //   this.usuarioService.logimai(form).subscribe(data =>{
  //       let dataResponse:ResponseI = data;
  //       if(dataResponse.status == "ok"){
  //         localStorage.setItem("token",dataResponse.result.token);
  //         this.router.navigate(['dashboard']);
  //       }else{
  //          this.errorStatus = true;
  //          this.errorMsj = dataResponse.result.error_msg;
  //       }
  //   })
  // }


  login(form: any) {
    this.usuarioService.login(this.usuario.nombreUsuario, this.usuario.password).subscribe(
      data => {
        console.log(data);
        if (data != null) {

          if (data.id) {
            this.usuario.id = data.id;
            this.usuario.foto = data.foto;


            this.toastr.success("Bienvenido " + data.nombreUsuario, "Login");
            localStorage.setItem('idUsuario', String(this.usuario.id));
            localStorage.setItem('nameImagen', String(this.user));

            location.replace('/client-carsoft')
          } else {
            this.toastr.warning("Usuario inhabilitado, no puede ingresar!", "Advertencia!");
            this.usuario = new Usuario;
          }

        } else {
          this.toastr.error("USERNAME O PASSWORD INCORRECTOS!", "Login");
          this.usuario = new Usuario;

        }

      }
    )
  }

  onSubmit() {
    console.log(this.loginform.value);
  }

}
