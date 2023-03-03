import { Seguro } from './seguro';
export class Reserva{
  cod_resv: number = 0;
  fecha_finresv?:Date;
  fecha_iniresv?:Date;
  forma_pago:string = "";
  horareservarealizad?:Date;
  num_placa: string="";

  // relacion
  seguro?: Seguro; //cod_seguro codigo del seguro
}
