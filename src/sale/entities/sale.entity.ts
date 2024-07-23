import {
    Column,
    Entity,
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


}
