import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerlogsidebar',
  templateUrl: './headerlogsidebar.component.html',
  styleUrls: ['./headerlogsidebar.component.css']
})
export class HeaderlogsidebarComponent {
  constructor(
    private _CargarScripts2: CargarscriptsService,
    private router : Router,



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


}
