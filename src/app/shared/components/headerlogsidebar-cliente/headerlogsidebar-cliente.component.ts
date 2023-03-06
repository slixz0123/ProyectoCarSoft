import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-headerlogsidebar-cliente',
  templateUrl: './headerlogsidebar-cliente.component.html',
  styleUrls: ['./headerlogsidebar-cliente.component.css']
})
export class HeaderlogsidebarClienteComponent {

  id: any;
  nombreUsuario: any;
  nombreRol: any;
  nombreFoto: any;
  nombreLogo: any;

  isSuperAdmin: boolean = false;
  isClientAdmin: boolean = false;
  isClient: boolean = false;
  isPublic: boolean = false;

  displayMaximizable: any;
  isLogin: boolean = false;



  constructor(

    private router : Router,
    private usuarioService: UsuarioService,
  )
  {
    {

      // Datos xd
    }
  }
  ngOnInit(): void {
     this.obtenerUsuario()
  }


// metodo de redireccion de ruta
  goToLogin($event: any) :void{

  this.router.navigate(['/Auth'])
  console.log($event)

 }
 //Cliente

 goToCatalogo($event: any) :void{

  this.router.navigate(['/client-carsoft/catalogo-client'])
  console.log($event)

 }
 goToGenerarRent($event: any) :void{

  this.router.navigate(['/client-carsoft/generar-rent-client'])
  console.log($event)

 }
 goToSoli($event: any) :void{

  this.router.navigate(['/client-carsoft/solicitud-client'])
  console.log($event)

 }

 obtenerUsuario() {
  this.id = localStorage.getItem('id');
  if (this.id != '' && this.id != undefined) {
    this.usuarioService.getPorId(this.id).subscribe((data) => {
      console.log(data);
      if (data != null) {
        this.isLogin = true;

        this.nombreUsuario = data.persona?.nombre + ' ' + data.persona?.apellido;
        this.nombreRol = data.rol?.nombre_Rol
        console.log("Found the user => " + this.nombreFoto);

        switch (data.rol?.nombre_Rol) {

          case 'CLIENTE':

            this.isClient = true;

            break;

          case 'EMPLEADO':
            this.isSuperAdmin = true;
            this.isClientAdmin = false;
            this.isClient = false;
            this.isPublic = false;
            break;
          default:
            alert('Rol desconocido');
            break;
        };

      } else {
        this.isLogin = false;
        this.nombreUsuario = 'NULL';
      }
    });
  }
}
  verificarCargosClientAdmin(id: any) {
    throw new Error('Method not implemented.');
  }
  cerrarSesion() {

    localStorage.removeItem('id');
    location.replace('/login-usr');
  }







}
