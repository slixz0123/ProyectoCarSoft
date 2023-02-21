import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerlogsidebar-administrador',
  templateUrl: './headerlogsidebar-administrador.component.html',
  styleUrls: ['./headerlogsidebar-administrador.component.css']
})
export class HeaderlogsidebarAdministradorComponent {

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
 //Automovil

 goToRegisterCar($event: any) :void{

  this.router.navigate(['/register-car'])
  console.log($event)

 }
 goToEdicionCar($event: any) :void{

  this.router.navigate(['/edit-car'])
  console.log($event)

 }
 goToListCar($event: any) :void{

  this.router.navigate(['/list-car'])
  console.log($event)

 }

 //Empleado
 

 goToRegisterEmple($event: any) :void{

  this.router.navigate(['/register-employee'])
  console.log($event)

 }
 goToEdicionEmple($event: any) :void{

  this.router.navigate(['/edit-employee'])
  console.log($event)

 }
 goToListEmple($event: any) :void{

  this.router.navigate(['/list-employees'])
  console.log($event)

 }








}
 