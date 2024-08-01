import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('taskAssignment')
export class TaskAssignment {
    @PrimaryGeneratedColumn()
    id_task_id_user: number;

    @Column()
    deadline: Date;

    @Column()
    creation_date: Date;

    // @ManyToMany(() => )
    // @JoinColumn()

}
