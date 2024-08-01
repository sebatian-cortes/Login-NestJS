import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PaymentHistoryService } from './payment_history.service';
import { PaymentHistoryController } from './payment_history.controller';
import { PaymentHistory } from './entities/payment_history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentHistory])],
  controllers: [PaymentHistoryController],
  providers: [PaymentHistoryService],
  exports: [PaymentHistoryService]
})
export class PaymentHistoryModule {}
