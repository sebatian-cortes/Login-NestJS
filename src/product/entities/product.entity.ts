import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';


@Entity('product')  
export class Product {

    @PrimaryGeneratedColumn()
    id_product: number;

    @Column()
    name_product: string;


    @Column()
    price: number;


    @Column()
    stock: number;


    @Column()
    description: string;

}
