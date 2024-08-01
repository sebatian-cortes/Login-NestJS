import { Product } from './../../product/entities/product.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn 
  } from 'typeorm';

@Entity('category')
export class Category {

    @PrimaryGeneratedColumn()
    id_category: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(()=> Product, product => product.category)
    @JoinColumn()
    products: Product[];
  }
