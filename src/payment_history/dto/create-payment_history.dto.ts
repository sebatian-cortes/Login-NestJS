import { Transform } from 'class-transformer';
import { IsDate, IsString, MinLength } from 'class-validator';

export class CreatePaymentHistoryDto {

    @IsDate()
    registration_date: Date;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    payment_status: string; 

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    Observations: string;
}
