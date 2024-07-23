import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('category')
export class Category {

    @PrimaryGeneratedColumn()
    id_category: number;

    @Column()
    name: string;

    @Column()
    description: string;

}
