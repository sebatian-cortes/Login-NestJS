import {
    Column,
    Entity,
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
}
