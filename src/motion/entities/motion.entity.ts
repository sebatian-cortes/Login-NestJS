import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('motion')
export class Motion {

    @PrimaryGeneratedColumn()
    id_motion: number;

    @Column()
    guy_motion: string;

    @Column()
    date_motion: Date;

    @Column()
    motion_stock: number;

    @Column()
    stock_remaining: number;
}
