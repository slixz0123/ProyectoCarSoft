import { Usuario } from './usuario';
export class Persona {

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

  //relacion
  usuario?: Usuario; // id   id de usuarios


}