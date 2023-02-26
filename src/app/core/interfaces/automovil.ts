import { Claseautomovil } from "../models/claseautomovil";
import { Seguro } from "../models/seguro";
import { Usuario } from "../models/usuario";

export class Automovil{

   num_placa?:string;
   anio?:Date;
   color?:string;
   estado?:string;
   marca?:string;
   modelo?:string;
   tipo_vehiculo?:string;
   foto?: string;


   //relacion
   claseautomovil?: Claseautomovil[] | undefined; //id_clase
   seguro?:Seguro []; //cod_seguro
   usuario?:Usuario [];// id id de suuario


}
