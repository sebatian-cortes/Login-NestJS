import { Transform } from 'class-transformer';
import {IsString, MinLength } from 'class-validator';

export class CreateTaskDto {

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    title_task: string;


    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    description: string;


    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    state: string;

}
