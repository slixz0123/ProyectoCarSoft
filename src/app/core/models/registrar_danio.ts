import { Automovil } from "./automovil";

export class Registrar_danio{
  cod_rgd?:number;
  descripcion?:string;
  precio?: number;




  //relacion
 automovil?:Automovil; // num_placa
}
