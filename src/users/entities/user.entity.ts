import { Novelty } from 'src/novelty/entities/novelty.entity';
import { Pay } from 'src/pay/entities/pay.entity';
import { PaymentHistory } from 'src/payment_history/entities/payment_history.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
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

  @OneToMany(() => Novelty, novelty => novelty.user)
  @JoinColumn()
  noveltys: Novelty[];

  @OneToOne(() => Pay, pay => pay.user)
  @JoinColumn()
  pays: Pay;

  @OneToMany(() => Sale, sale => sale.user)
  @JoinColumn()
  sales: Sale[];
}
