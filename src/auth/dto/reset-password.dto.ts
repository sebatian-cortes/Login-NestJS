import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class ResetPassworDto{

    @IsNotEmpty()
    @IsUUID('4')
    resetPasswordToken: string;

    @IsNotEmpty()
    @Length(6, 20)
    contraseña: string;

}