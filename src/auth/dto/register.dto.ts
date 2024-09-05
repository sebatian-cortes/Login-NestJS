import { Transform } from 'class-transformer';
import { IsEmail, isNumber, IsNumber, IsString, Min, MinLength } from 'class-validator';
import { Task } from 'src/task/entities/task.entity';
import { IsNull } from 'typeorm';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  nombre: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  apellido: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(10)
  telefono: string;

  @IsEmail()
  correo: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  contraseña: string;


  @IsNumber()
  @Min(1)
  edad: number;
  task: Task[]


}
