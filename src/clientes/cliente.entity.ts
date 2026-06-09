import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Orden } from '../ordenes/orden.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column()
  nombres: string;

  @Column()
  paterno: string;

  @Column({ nullable: true })
  materno: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  creadoEn: Date;

  @UpdateDateColumn()
  actualizadoEn: Date;

  @DeleteDateColumn()
  eliminadoEn: Date;

  @OneToMany(() => Orden, (orden) => orden.cliente)
  ordenes: Orden[];
}
