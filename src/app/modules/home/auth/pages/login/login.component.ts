import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/core/models/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = new Usuario;
  tipoUser: any;
  user: any;
  empresa: any;

  usuarios: any[] = [
    { usu: 'Visita' }, { usu: 'Cliente' }, { usu: 'Empleado de empresa' }, { usu: 'Administrador de empresa' }, { usu: 'Administrador' }, { usu: 'Super administrador' },
  ];

  constructor(private toastr: ToastrService, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('id');

  }

  login() {
    this.usuarioService.login(this.usuario.nombreUsuario, this.usuario.password).subscribe(
      data => {
        console.log(data);
        if (data != null) {

          if (data.id) {
            this.usuario.id = data.id;


            location.replace('/admin-carsoft')
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

}
