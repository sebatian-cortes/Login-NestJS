import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";


export class ChangePasswordDto{
    @IsString()
    oldPassword: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(6)
    newPassword: string;
}
