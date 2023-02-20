import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { CargarscriptsService } from '../../../services/cargarjs.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(
    private car: CargarscriptsService,
    private router : Router
 ){
    { car.cargacarrousel (["swiper-bundle.min"])}
  }

  ngOnInit(): void {
  }

  // metodo de redireccion de ruta
  goToLogin($event: any) :void{

    this.router.navigate(['/Auth'])
    console.log($event)

   }
   goToRegister($event: any) :void{

    this.router.navigate(['/register-usr'])
    console.log($event)

   }

  goToCatalogo($event: any) :void{

   this.router.navigate(['/catalogo-home'])
   console.log($event)

   }
   goToServicos($event: any) :void{

    this.router.navigate(['/servicios'])
    console.log($event)

    }

    goToNosotros($event: any) :void{

      this.router.navigate(['/nosotros'])
      console.log($event)

      }
      goToHome($event: any) :void{

        this.router.navigate([''])
        console.log($event)

        }


}
