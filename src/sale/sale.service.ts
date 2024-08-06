import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository <Sale>
  ){}


  async create(createSaleDto: CreateSaleDto) {
    return await this.saleRepository.save(createSaleDto);
  }

  findAll() {
    return this.saleRepository.find({
      relations: {
        user: true,
      }
    });
  }

  findOne(id_sale: number) {
    return this.saleRepository.findOneBy({id_sale});
  }

  update(id_sale: number, updateSaleDto: UpdateSaleDto) {
    return this.saleRepository.update({id_sale}, updateSaleDto);
  }

  remove(id_sale: number) {
    return this.saleRepository.softDelete({id_sale});
  }
}
