import { Automovil } from '../interfaces/automovil';
import { Alquiler } from './alquiler';
import { Seguro } from './seguro';
import { Usuario } from './usuario';
export class Reserva{
  cod_reserva: number = 0;
  fecha_finresv?:Date;
  fecha_iniresv?:Date;
  num_dias_alquiler:number=0;
  forma_pago:string = "";
  documento_garantia:string="";
  precio:number=0;
  licencia:string="";
  horareservarealizad?:Date;
  num_placa: string="";

  // relacion
  seguro?: Seguro; //cod_seguro codigo del seguro
  automovil?:Automovil;
  usuarios?:Usuario;
  alquiler?:Alquiler;
}
