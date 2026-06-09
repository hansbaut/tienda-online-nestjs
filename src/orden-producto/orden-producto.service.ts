import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdenProducto } from './orden-producto.entity';
import { CreateOrdenProductoDto } from './dto/create-orden-producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden-producto.dto';

@Injectable()
export class OrdenProductoService {
  constructor(
    @InjectRepository(OrdenProducto)
    private readonly ordenProductoRepo: Repository<OrdenProducto>,
  ) {}

  findAll() {
    return this.ordenProductoRepo.find({ relations: ['orden', 'producto'] });
  }

  async findOne(id: number) {
    const op = await this.ordenProductoRepo.findOne({
      where: { idOrdenProducto: id },
      relations: ['orden', 'producto'],
    });
    if (!op) throw new NotFoundException(`OrdenProducto #${id} no encontrada`);
    return op;
  }

  create(dto: CreateOrdenProductoDto) {
    const op = this.ordenProductoRepo.create(dto);
    return this.ordenProductoRepo.save(op);
  }

  async update(id: number, dto: UpdateOrdenProductoDto) {
    await this.findOne(id);
    await this.ordenProductoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number, idProducto: number) {
    const op = await this.ordenProductoRepo.findOne({
      where: { idOrden: id, idProducto: idProducto },
    });
    if (!op) throw new NotFoundException(`Producto #${idProducto} no encontrado en orden #${id}`);
    await this.ordenProductoRepo.delete(op.idOrdenProducto);
    return { message: `Producto #${idProducto} eliminado de la orden #${id}` };
  }
}
