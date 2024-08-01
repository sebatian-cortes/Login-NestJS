import {IsDate, IsString, MinLength } from 'class-validator';

export class CreateTaskAssignmentDto {

    @IsDate()
    deadline: Date;

    @IsDate()
    creation_date: Date;

    

}
