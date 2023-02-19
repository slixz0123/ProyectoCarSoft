import { Alquiler } from "../models/alquiler";
import { Persona } from "../models/persona";
import { Registrar_danio } from "../models/registrar_danio";

export interface Devolucion{
  cod_dv?:number;
  fecha_dev?:Date;
  lugar_dev?:string;

  //relacion
  alquiler?:Alquiler; // id_alquiler
  persona?: Persona // id_persona
  registrar_danio?: Registrar_danio; // cod_rgd
}
