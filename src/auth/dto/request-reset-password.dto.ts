import { IsEmail, IsNotEmpty } from "class-validator";

export class RequestResetPasswordDto { 
    @IsNotEmpty()
    @IsEmail()
    correo: string;
    
}