import { PartialType } from '@nestjs/mapped-types';
import { RegisterCompanyDto } from 'src/auth/dto/registerCompany.dto';

export class UpdateCompanyDto extends PartialType(RegisterCompanyDto) {}
