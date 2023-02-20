import { Persona } from './persona';
import { Rol } from './rol';
export class Usuario {

  id: number = 0;
  email: string = "";
  nombreUsuario: string = "";
  password: string = "";
  //estado: boolean = false;
 // foto?: string;



  //realcion
  persona?: Persona; //id_persona herencia
  rol?:Rol; //id_rol herencia





}
