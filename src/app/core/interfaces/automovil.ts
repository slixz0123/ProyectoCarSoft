import { Claseautomovil } from "../models/claseautomovil";
import { Seguro } from "../models/seguro";
import { Usuario } from "../models/usuario";

export class Automovil{

   num_placa:string="";
   anio?:string;
   color?:string;
   estado?:string;
   marca?:string;
   modelo?:string;
   tipo_vehiculo?:string;
   foto: string = "";
   matricula: string = "";



   //relacion

   claseAutomovil: Claseautomovil = new Claseautomovil; //id_clase
   seguro?:Seguro [] | undefined; //cod_seguro


/*export class Automovil {
   idauto?: number;
   num_placa?: string;
   anio?: string;
   color?: string;
   estado?: string;
   marca?: string;
   modelo?: string;
   tipo_vehiculo?: string;
   foto?: string;
   id_clase?: Claseautomovil;*/
}
//  interface Claseautomovil {
//    id_clase: number;
//    nombre: string;
//    precio_alquiler_dia: string;
//  }
