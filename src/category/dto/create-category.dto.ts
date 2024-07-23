import { Transform } from 'class-transformer';
import {IsString, MinLength, IsNumber, Min } from 'class-validator';

export class CreateCategoryDto {

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    name: string;

    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    description: string;


}
