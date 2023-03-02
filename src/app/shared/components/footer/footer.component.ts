import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    private _CargarSc: CargarscriptsService,
    private router : Router


  )

  {
    {
      _CargarSc.carga3(["scrollHeaderBlock"])
      _CargarSc.carga2(["header"])


    }
  }
  ngOnInit(): void {
  }
  goToLogin($event: any) :void{

    this.router.navigate(['/Auth'])
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
