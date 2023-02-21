import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CargarscriptsService } from 'src/assets/cargarscripts.service';

@Component({
  selector: 'app-headerlogsidebar2',
  templateUrl: './headerlogsidebar2.component.html',
  styleUrls: ['./headerlogsidebar2.component.css']
})
export class Headerlogsidebar2Component {
  constructor(
    private _CargarSc: CargarscriptsService,
    private router : Router


  )

  {
    {
      _CargarSc.carga3(["header2"])



    }
  }
  ngOnInit(): void {
  }
}
