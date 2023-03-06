import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-headerlogsidebar-administrador',
  templateUrl: './headerlogsidebar-administrador.component.html',
  styleUrls: ['./headerlogsidebar-administrador.component.css']
})
export class HeaderlogsidebarAdministradorComponent implements OnInit {
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

    private router : Router ,
    private _CargarScripts: CargarscriptsService,

    private usuarioService: UsuarioService,

  )
  {
    {

      // Datos xd
    }
  }
  ngOnInit(): void {
this.obtenerUsuario();
  }


// metodo de redireccion de ruta
  goToLogin($event: any) :void{

  this.router.navigate(['/Auth'])
  console.log($event)

 }
 //Automovil

 goToRegisterCar($event: any) :void{

  this.router.navigate(['/admin-carsoft/register-car'])
  console.log($event)

 }
 goToEdicionCar($event: any) :void{

  this.router.navigate(['/admin-carsoft/edit-car'])
  console.log($event)

 }
 goToListCar($event: any) :void{

  this.router.navigate(['/admin-carsoft/list-car'])
  console.log($event)

 }

 //Empleado


 goToRegisterEmple($event: any) :void{

  this.router.navigate(['/admin-carsoft/register-employee'])
  console.log($event)

 }
 goToEdicionEmple($event: any) :void{

  this.router.navigate(['/admin-carsoft/edit-employee'])
  console.log($event)

 }
 goToListEmple($event: any) :void{

  this.router.navigate(['/admin-carsoft/list-employees'])
  console.log($event)

 }


 goToRegisterClass($event: any) :void{

  this.router.navigate(['/admin-carsoft/register-class'])
  console.log($event)

 }


 goToEditClass($event: any) :void{

  this.router.navigate(['/admin-carsoft/edit-class'])
  console.log($event)

 }

 goTolistClass($event: any) :void{

  this.router.navigate(['/admin-carsoft/list-class'])
  console.log($event)

 }


 goToRegistercliente($event: any) :void{

  this.router.navigate(['/admin-carsoft/register-cliente'])
  console.log($event)

 }


 goToListcliente($event: any) :void{

  this.router.navigate(['/admin-carsoft/list-cliente'])
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
        this.nombreRol = data.rol?.nombre_rol
        console.log("Found the user => " + this.nombreFoto);

        switch (data.rol?.nombre_rol) {

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




}
