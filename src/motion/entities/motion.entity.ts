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

    @Column({name: 'product_id'})
    productId: number;

    @ManyToOne(() => Product, (product) => product.motion)
    @JoinColumn({name: 'product_id'})
    product: Product;
}
