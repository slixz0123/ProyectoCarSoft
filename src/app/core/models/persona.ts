import { Usuario } from './usuario';
export class Persona {

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
  //relacion
  usuario?: Usuario; // id   id de usuarios


}

