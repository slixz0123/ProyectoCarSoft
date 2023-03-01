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





}
