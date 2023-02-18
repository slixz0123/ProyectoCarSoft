import { Seguro } from '../models/seguro';
export interface Reserva{
  cod_resv?: number;
  fecha_finresv?:Date;
  fecha_iniresv?:Date;
  forma_pago?:string;
  horareservarealizad?:Date;
  num_placa?: string;

  // relacion
  seguro?: Seguro; //cod_seguro codigo del seguro
}
