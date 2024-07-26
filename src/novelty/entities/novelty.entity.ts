import {
    Column,
    Entity,
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
}
