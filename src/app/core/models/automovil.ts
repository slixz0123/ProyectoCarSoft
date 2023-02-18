import { Claseautomovil } from "./claseautomovil";
import { Seguro } from "./seguro";
import { Usuario } from "./usuario";

export class Automovil{
   num_placa?:string;
   anio?:Date;
   color?:string;
   estado?:string;
   marca?:string;
   modelo?:string;
   tipo_vahiculo?:string;


   //relacion
   claseautomovil?: Claseautomovil; //id_clase
   seguro?:Seguro; //cod_seguro
   usuario?:Usuario;// id id de suuario


}
