import { Product } from 'src/product/entities/product.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
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

    @ManyToOne(() => Product, product => product.motions)
    @JoinColumn()
    product: Product;
}
