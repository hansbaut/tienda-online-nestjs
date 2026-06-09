import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  findAll() {
    return this.productoRepo.find({ relations: ['categoria'] });
  }

  async findOne(id: number) {
    const producto = await this.productoRepo.findOne({
      where: { idProducto: id },
      relations: ['categoria'],
    });
    if (!producto) throw new NotFoundException(`Producto #${id} no encontrado`);
    return producto;
  }

  create(dto: CreateProductoDto) {
    const producto = this.productoRepo.create(dto);
    return this.productoRepo.save(producto);
  }

  async update(id: number, dto: UpdateProductoDto) {
    await this.findOne(id);
    await this.productoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.productoRepo.delete(id);
    return { message: `Producto #${id} eliminado` };
  }
}
