import { Transform } from 'class-transformer';
import { IsString, MinLength, IsNumber, Min, IsDate } from 'class-validator';

export class CreateNoveltyDto {

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    description: string;


    @IsNumber()
    @Min(1)
    severity: number;


    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    state: string;

    @IsDate()
    date_detection: Date;
}
