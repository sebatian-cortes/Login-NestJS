import { User } from 'src/users/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
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

    @Column()
    id_usuario: number;

    @OneToOne(() => User, user => user.pay)
    @JoinColumn()
    user: User;
}
