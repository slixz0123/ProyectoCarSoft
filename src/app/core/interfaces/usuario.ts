import { Persona } from '../models/persona';
import { Rol } from '../models/rol';
export interface Usuarios {

  id: number ;
  email: string ;
  nombre_usuario: string ;
  password: string;
  foto?: string;
  //estado: boolean = false;




  //realcion
  persona?: Persona; //id_persona herencia
  rol?:Rol; //id_rol herencia






}
