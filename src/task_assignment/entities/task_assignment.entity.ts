import { Task } from 'src/task/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
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

    @ManyToMany(() => User, user => user.taskAssignments)
    @JoinColumn()
    user: User[];

    @ManyToMany(() => Task, task => task.taskAssignments)
    @JoinColumn()
    task: Task[];
}
