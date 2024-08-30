import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
    
  @Entity('reset-token')
  export class ResetToken{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    token: string;

    @Column({type: 'timestamp', nullable: true})
    expiryDate: Date;
  }
