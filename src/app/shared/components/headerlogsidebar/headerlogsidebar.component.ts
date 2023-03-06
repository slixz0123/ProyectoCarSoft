import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-headerlogsidebar',
  templateUrl: './headerlogsidebar.component.html',
  styleUrls: ['./headerlogsidebar.component.css']
})
export class HeaderlogsidebarComponent {
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
    private _CargarScripts2: CargarscriptsService,
    private router : Router,
    private usuarioService: UsuarioService,



  )





  {
    {

      _CargarScripts2.carga(["bootstrap.min"])
      _CargarScripts2.carga2(["pcoded"])
      _CargarScripts2.carga3(["pcoded.min"])
      _CargarScripts2.carga4(["uikit"])
      _CargarScripts2.carga5(["uikit.min"])
      _CargarScripts2.carga6(["vendor-all"])
      _CargarScripts2.carga7(["vendor-all.min"])
      _CargarScripts2.carga8(["dashboard-sale"])
      _CargarScripts2.carga9(["chart-apex"])
      _CargarScripts2.carga10(["apexcharts.min"])
      _CargarScripts2.carga11(["clipboard.min"])
      _CargarScripts2.carga12(["feather.min"])
      _CargarScripts2.carga13(["gmaps.min"])
      _CargarScripts2.carga14(["jquery-ui.min"])

      _CargarScripts2.carga15(["nouislider.min"])
      _CargarScripts2.carga16(["perfect-scrollbar.min"])
      _CargarScripts2.carga17(["prism"])
      _CargarScripts2.carga18(["wNumb.min"])
      _CargarScripts2.carga19(["google-maps"])
      _CargarScripts2.carga20(["header2"])
      _CargarScripts2.carga12(["sid"])




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

 goToRegisterClient($event: any) :void{

  this.router.navigate(['/employee-carsoft/register-client'])
  console.log($event)

 }
 goToEdicionClient($event: any) :void{

  this.router.navigate(['/employee-carsoft/edit-client'])
  console.log($event)

 }
 goToListClient($event: any) :void{

  this.router.navigate(['/employee-carsoft/list-client'])
  console.log($event)

 }

 goToCatalogot($event: any) :void{

  this.router.navigate(['/employee-carsoft/catalogo-client'])
  console.log($event)

 }
 goToCrearRent($event: any) :void{

  this.router.navigate(['/employee-carsoft/crear-renta'])
  console.log($event)

 }
 goToAprovarRent($event: any) :void{

  this.router.navigate(['/employee-carsoft/aprovee-renta'])
  console.log($event)

 }
 goToCrearAuto($event: any) :void{

  this.router.navigate(['/employee-carsoft/register-auto'])
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
