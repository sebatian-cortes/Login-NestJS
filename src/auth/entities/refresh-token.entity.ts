import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
    
  @Entity('refresh-token')
  export class RefreshToken{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    token: string;

    @Column({type: 'timestamp', nullable: true})
    expiryDate: Date;
  }