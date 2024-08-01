import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn, 
    ManyToMany
  } from 'typeorm';

@Entity('companyUser')
export class CompanyUser {
    @PrimaryGeneratedColumn()
    id_company_id_user: number;

    @Column()
    role: string;

    @ManyToMany(() => User, user => user.companyUsers)
    @JoinColumn()
    user: User[];

    @ManyToMany(() => Company, company => company.companyUsers)
    @JoinColumn()
    company: Company[];

}
