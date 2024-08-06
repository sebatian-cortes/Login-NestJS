import { PaymentHistory } from 'src/payment_history/entities/payment_history.entity';
import { User } from 'src/users/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';


@Entity('pay')  
export class Pay {

    @PrimaryGeneratedColumn()
    id_pay: number;

    @Column()
    date_pay: Date;

    @Column()
    amount: number;

    @Column({name: 'user_id'})
    userId: number;

    @Column({name: 'paymentHistory_id'})
    paymentHistoryId: number;

    @OneToOne(() => User, (user) => user.pay)
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(()=> PaymentHistory, (paymentHistory) => paymentHistory.pay)
    @JoinColumn({name: 'paymentHistory_id'})
    paymentHistory: PaymentHistory;
}
