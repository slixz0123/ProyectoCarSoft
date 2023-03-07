import { Claseautomovil } from "../models/claseautomovil";


export interface Auto {


  num_placa:string;
  anio?:string;
  color?:string;
  estado?:string;
  marca?:string;
  modelo?:string;
  tipo_vehiculo?:string;
  foto?: string;
  matricula?:string;

  clase: Claseautomovil[];

}
