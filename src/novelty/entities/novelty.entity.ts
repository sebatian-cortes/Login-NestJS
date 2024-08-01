import { User } from 'src/users/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('pay')
export class Novelty {

    @PrimaryGeneratedColumn()
    id_novetly: number;

    @Column()
    description: string;

    @Column()
    severity: number;

    @Column()
    state: string;

    @Column()
    date_detection: Date;

    @ManyToOne(() => User, user => user.noveltys)
    @JoinColumn()
    user: User;

    @OneToOne(() => )
}
