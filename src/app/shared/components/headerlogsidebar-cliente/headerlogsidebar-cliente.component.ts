import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerlogsidebar-cliente',
  templateUrl: './headerlogsidebar-cliente.component.html',
  styleUrls: ['./headerlogsidebar-cliente.component.css']
})
export class HeaderlogsidebarClienteComponent {
  constructor(

    private router : Router
  )
  {
    {
 
      // Datos xd
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

}
