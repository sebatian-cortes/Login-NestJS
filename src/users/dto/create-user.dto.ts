import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  correo: string;
  
  @IsNotEmpty()
  @Length(6, 20)
  contraseña: string;
  
  nombre?: string;
  apellido:string;
  edad:number;
  telefono:string;
}
