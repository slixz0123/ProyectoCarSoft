import { Automovil } from "../interfaces/automovil";
import { Comprobante } from "./comprobante";
import { Reserva } from "./reserva";
import { Rol } from "./rol";
import { Seguro } from "./seguro";
import { Usuario } from "./usuario";


export class Alquiler{
  id_alquiler?: number;
  documento_garantia?:string;
  fecha_salida?:Date;
  prox_fecha_entrega?:Date;



  //relacion
  usuario: Usuario = new Usuario(); // id de usuario
  rol: Rol = new Rol(); ///cod_comp codigo comprobante
  Seguro: Seguro= new Seguro(); // cod_resv codigo de reserva
  auto: Automovil= new Automovil();

}
