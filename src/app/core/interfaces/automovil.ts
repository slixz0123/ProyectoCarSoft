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
   foto?: string;



   //relacion
   claseautomovil: Claseautomovil = new Claseautomovil; //id_clase
   seguro?:Seguro [] | undefined; //cod_seguro



}
