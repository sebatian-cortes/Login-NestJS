// src/email/dto/send-email.dto.ts
import { IsEmail, IsNotEmpty, IsString, IsObject } from 'class-validator';

export class SendEmailDto {
  @IsEmail({}, { message: 'Recipient email is required' })
  @IsNotEmpty({ message: 'Recipient email is required' })
  to: string;

  @IsString({ message: 'Subject is required' })
  @IsNotEmpty({ message: 'Subject is required' })
  subject: string;

  @IsObject({ message: 'Template data is required' })
  dataTemplate: any; // Define a more specific type if possible

  @IsString({ message: 'Template content is required' })
  @IsNotEmpty({ message: 'Template content is required' })
  templateContent: string;
}
