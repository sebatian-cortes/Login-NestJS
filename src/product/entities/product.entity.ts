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

    @Column()
    id_category: number;

    @ManyToOne(()=> Category, category => category.products)
    @JoinColumn()
    category: Category;

    @ManyToOne(()=> Company, company => company.products)
    @JoinColumn()
    company: Company;

    @OneToMany(() => Motion, motion => motion.product)
    @JoinColumn()
    motions: Motion[];
}
