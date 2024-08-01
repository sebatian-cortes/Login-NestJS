import { Transform } from 'class-transformer';
import {IsString, MinLength } from 'class-validator';

export class CreateCompanyUserDto {
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    role: string;
}
