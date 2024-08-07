import {
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
    JoinColumn
  } from 'typeorm';

@Entity('task')  
export class Task {

    @PrimaryGeneratedColumn()
    id_task: number;

    @Column()
    title_task: string;

    @Column()
    description: string;

    @Column()
    state: string;

}
