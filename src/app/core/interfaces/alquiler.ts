import { Comprobante } from "../models/comprobante";
import { Reserva } from "../models/reserva";
import { Usuario } from "../models/usuario";


export interface Alquiler{
  id_alquiler?: number;
  documento_garantia?:string;
  fecha_salida?:Date;
  prox_fecha_entrega?:Date;



  //relacion
  usuario: Usuario; // id de usuario
  comprobante?: Comprobante; ///cod_comp codigo comprobante
  reserva?: Reserva; // cod_resv codigo de reserva

}
