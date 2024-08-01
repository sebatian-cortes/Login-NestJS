import { CompanyUser } from 'src/company_user/entities/company_user.entity';
import { Product } from 'src/product/entities/product.entity';
import {
    Column,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToMany
  } from 'typeorm';

@Entity('company')
export class Company {

    @PrimaryGeneratedColumn()
    id_company: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    description: string;

    @Column()
    sector: string;

    @Column()
    address: string;

    @Column({ nullable: false, default: 'micro' })
    type: string;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(()=> Product, product => product.company)
    @JoinColumn()
    products: Product[];

    @ManyToMany(() => CompanyUser, companyUser => companyUser.company)
    @JoinColumn()
    companyUsers: CompanyUser[];
}
