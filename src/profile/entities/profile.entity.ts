import {
    Column,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  import { User } from 'src/users/entities/user.entity';
import { Company } from 'src/companies/entities/company.entity';

  @Entity('profile')
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    rol: string;
  
    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ name: 'user_id' })
    userId:number;

    @ManyToOne(() => User, user => user.profile)
    @JoinColumn({ name: 'user_id'})
    user: User;

    @Column({ name: 'company_id' })
    companyId:number;

    @ManyToOne(() => Company, company => company.profile )
    @JoinColumn({ name: 'company_id'})
    company: Company;
}
