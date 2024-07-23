import { Transform } from 'class-transformer';
import { IsString, MinLength, IsNumber, Min, IsDate } from 'class-validator';


export class CreateMotionDto {
    
    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    guy_motion: string;

    @IsDate()
    date_motion: Date;


    @IsNumber()
    @Min(1)
    motion_stock: number;


    @IsNumber()
    @Min(1)
    stock_remaining: number;
}
