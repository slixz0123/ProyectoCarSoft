import { Automovil } from '../interfaces/automovil';
import { Alquiler } from './alquiler';
import { Seguro } from './seguro';
import { Usuario } from './usuario';
export class Reserva{
  cod_resv: number = 0;
  fecha_finresv?:Date;
  fecha_iniresv?:Date;
  forma_pago:string = "";
  horareservarealizad?:Date;
  num_placa: string="";

  // relacion
  seguro?: Seguro; //cod_seguro codigo del seguro
  automovil?:Automovil;
  usuarios?:Usuario;
  alquiler?:Alquiler;
}
