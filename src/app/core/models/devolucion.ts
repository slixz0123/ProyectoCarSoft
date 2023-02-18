import { Alquiler } from "./alquiler";
import { Persona } from "./persona";
import { Registrar_danio } from "./registrar_danio";

export class Devolucion{
  cod_dv?:number;
  fecha_dev?:Date;
  lugar_dev?:string;

  //relacion
  alquiler?:Alquiler; // id_alquiler
  persona?: Persona // id_persona
  registrar_danio?: Registrar_danio; // cod_rgd
}
