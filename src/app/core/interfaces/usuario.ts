import { Persona } from '../models/persona';
import { Rol } from '../models/rol';
export interface Usuarios {

  id: number ;
  nombre_usuario: string ;
  password: string;

  //estado: boolean = false;




  //realcion
  persona?: Persona; //id_persona herencia
  Rol?:Rol | undefined; //id_rol herencia






}
