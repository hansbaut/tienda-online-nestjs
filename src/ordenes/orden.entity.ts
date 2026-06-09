import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Cliente } from '../clientes/cliente.entity';
import { OrdenProducto } from '../orden-producto/orden-producto.entity';

@Entity('ordenes')
export class Orden {
  @PrimaryGeneratedColumn()
  idOrden: number;

  @Column({ default: 'pendiente' })
  estado: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  total: number;

  @CreateDateColumn()
  creadoEn: Date;

  @UpdateDateColumn()
  actualizadoEn: Date;

  @DeleteDateColumn()
  eliminadoEn: Date;

  @Column()
  idCliente: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.ordenes)
  @JoinColumn({ name: 'idCliente' })
  cliente: Cliente;

  @OneToMany(() => OrdenProducto, (op) => op.orden)
  ordenProductos: OrdenProducto[];
}
