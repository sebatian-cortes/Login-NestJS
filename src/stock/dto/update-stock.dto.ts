import { PartialType } from '@nestjs/mapped-types';
import { CreateStockDto } from './create-stock.dto';

export class UpdateUserDto extends PartialType(CreateStockDto) {}
