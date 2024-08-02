import { Company } from 'src/companies/entities/company.entity';
import { Category } from './../../category/entities/category.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne, 
    JoinColumn,
    OneToMany
  } from 'typeorm';
import { Motion } from 'src/motion/entities/motion.entity';


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

    @ManyToOne(()=> Category, category => category.products)
    category: Category;

    @ManyToOne(()=> Company, company => company.products)
    company: Company;

    @OneToMany(() => Motion, motion => motion.product)
    motions: Motion[];
}
