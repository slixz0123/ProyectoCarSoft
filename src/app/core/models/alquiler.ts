import { Automovil } from "../interfaces/automovil";
import { Comprobante } from "./comprobante";
import { Reserva } from "./reserva";
import { Rol } from "./rol";
import { Seguro } from "./seguro";
import { Usuario } from "./usuario";


export class Alquiler{
  id_alquiler?: number;
  documento_garantia?:string;
  fecha_iniresv?:Date;
  fecha_finresv?:Date;



  //relacion
  usuarios: Usuario = new Usuario(); // id de usuario
  seguro: Seguro= new Seguro(); // cod_resv codigo de reserva
  automovil: Automovil= new Automovil();

}
