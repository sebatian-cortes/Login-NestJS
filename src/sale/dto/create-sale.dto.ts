import {IsNumber, Min } from 'class-validator';

export class CreateSaleDto {

    @IsNumber()
    @Min(1)
    amount: number;


    @IsNumber()
    @Min(1)
    price_total: number;
}
