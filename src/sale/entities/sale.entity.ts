import { User } from 'src/users/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('sale')
export class Sale {

    @PrimaryGeneratedColumn()
    id_sale: number;

    @Column()
    amount: number;

    @Column()
    price_total: number;

    @ManyToMany(() => User, (user) => user.sales)
    @JoinColumn()
    user: User;
}
