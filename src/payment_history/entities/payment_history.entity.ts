import { Pay } from 'src/pay/entities/pay.entity';
import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    JoinColumn
  } from 'typeorm';

@Entity('paymentHistory')
export class PaymentHistory {

    @PrimaryGeneratedColumn()
    ID_payment_history: number;

    @Column()
    registration_date: Date;

    @Column()
    payment_status: string; 

    @Column()
    Observations: string;

    @OneToMany(() => Pay, (pay) => pay.paymentHistory)
    @JoinColumn()
    pay: Pay[];
  }
