import { Persona } from './persona';
import { Rol } from './rol';
export class Usuario {

  id: number = 0;
  nombreUsuario: string = "";
  password: string = "";




  //realcion
  persona: Persona = new Persona; //id_persona herencia
  rol: Rol = new Rol; //id_rol herencia





}
