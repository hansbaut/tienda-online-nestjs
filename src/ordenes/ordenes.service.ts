import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';

@Injectable()
export class OrdenesService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepo: Repository<Orden>,
  ) {}

  findAll() {
    return this.ordenRepo.find({ relations: ['cliente', 'ordenProductos', 'ordenProductos.producto'] });
  }

  async findOne(id: number) {
    const orden = await this.ordenRepo.findOne({
      where: { idOrden: id },
      relations: ['cliente', 'ordenProductos', 'ordenProductos.producto'],
    });
    if (!orden) throw new NotFoundException(`Orden #${id} no encontrada`);
    return orden;
  }

  create(dto: CreateOrdenDto) {
    const orden = this.ordenRepo.create(dto);
    return this.ordenRepo.save(orden);
  }

  async update(id: number, dto: UpdateOrdenDto) {
    await this.findOne(id);
    await this.ordenRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.ordenRepo.delete(id);
    return { message: `Orden #${id} eliminada` };
  }
}
