import { Claseautomovil } from "../models/claseautomovil";
import { Seguro } from "../models/seguro";
import { Usuario } from "../models/usuario";

export class Automovil{

   num_placa?:string;
   anio?:string;
   color?:string;
   estado?:string;
   marca?:string;
   modelo?:string;
   tipo_vehiculo?:string;
   foto?: string;
   id_clase?:number;


   //relacion
   claseautomovil?: Claseautomovil[] | undefined; //id_clase
   seguro?:Seguro []; //cod_seguro
   usuario?:Usuario [];// id id de Usuario


}
