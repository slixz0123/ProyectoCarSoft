import { Rol } from './rol';
import { Usuario } from './usuario';
export class Persona {
/*
  id_persona: number =0;
  apellido: string = "";
  cedula: string= "";
  ciudad: string= "";
  correo: string= "";
  direccion: string= "";
  edad: number= 0;
  genero: string= "";
  nombre: string= "";
  telefono: string= "";
  foto: string= "";
*/
  id_persona?: number;
  apellido?: string;
  cedula?: string;
  ciudad?: string;
  correo?: string;
  direccion?: string;
  edad?: number;
  genero?: string;
  nombre?: string;
  telefono?: string;
  foto?: string;
  id_rol?: number;

  //relacion
  usuario?: Usuario; // id   id de usuarios
  rol?: Rol;


}

