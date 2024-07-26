import { Injectable } from '@nestjs/common';
import { CreatePayDto } from './dto/create-pay.dto';
import { UpdatePayDto } from './dto/update-pay.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pay } from './entities/pay.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PayService {
  constructor(
    @InjectRepository(Pay)
    private payRepository: Repository <Pay>
  ){}

  async create(createPayDto: CreatePayDto) {
    return await this.payRepository.save(createPayDto);
  }

  findAll() {
    return this.payRepository.find();
  }

  findOne(id_pay: number) {
    return this.payRepository.findOneBy({id_pay});
  }

  update(id_pay: number, updatePayDto: UpdatePayDto) {
    return this.payRepository.update({id_pay}, updatePayDto)
  }

  remove(id_pay: number) {
    return this.payRepository.softDelete({id_pay});
  }
}
