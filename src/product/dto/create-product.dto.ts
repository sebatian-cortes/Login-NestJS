import { Transform } from 'class-transformer';
import {IsString, MinLength, IsNumber, Min } from 'class-validator';

export class CreateProductDto {


    @Transform (({value}) => value.trim())
    @IsString()
    @MinLength(1)
    name_product: string;


    @IsNumber()
    @Min(1)
    price: number;


    @IsNumber()
    @Min(1)
    stock: number;


    @Transform (({value}) => value.trim())
    @IsString()
    @MinLength(1)
    description: string;



}
