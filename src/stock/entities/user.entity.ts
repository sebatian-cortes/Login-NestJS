import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuario')
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  edad: number;

  @Column({ unique: true, nullable: false })
  correo: string;

  @Column()
  telefono: string;

  @Column({ nullable: false })
  contraseña: string;

  // @Column({ default: 'user' })
  // rol: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
