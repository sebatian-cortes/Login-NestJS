import { Injectable } from '@nestjs/common';
import { CreatePaymentHistoryDto } from './dto/create-payment_history.dto';
import { UpdatePaymentHistoryDto } from './dto/update-payment_history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentHistory } from './entities/payment_history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentHistoryService {
  constructor(
    @InjectRepository(PaymentHistory)
    private PaymentHistoryRepository: Repository <PaymentHistory>,
  ){}

  async create(createPaymentHistoryDto: CreatePaymentHistoryDto) {
    return await this.PaymentHistoryRepository.save(createPaymentHistoryDto);
  }

  findAll() {
    return this.PaymentHistoryRepository.find({
      relations: {
        pay: true,
      }
    });
  }

  findOne(ID_payment_history: number) {
    return this.PaymentHistoryRepository.findOneBy({ID_payment_history});
  }

  update(ID_payment_history: number, updatePaymentHistoryDto: UpdatePaymentHistoryDto) {
    return this.PaymentHistoryRepository.update({ID_payment_history}, updatePaymentHistoryDto);
  }

  remove(ID_payment_history: number) {
    return this.PaymentHistoryRepository.softDelete({ID_payment_history});
  }
}
