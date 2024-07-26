import {IsNumber, Min, IsDate } from 'class-validator';

export class CreatePayDto {

    @IsDate()
    date_pay: number;

    @IsNumber()
    @Min(1)
    amount: number;

}
