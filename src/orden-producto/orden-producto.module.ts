import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenProducto } from './orden-producto.entity';
import { OrdenProductoService } from './orden-producto.service';
import { OrdenProductoController } from './orden-producto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenProducto])],
  providers: [OrdenProductoService],
  controllers: [OrdenProductoController],
  exports: [OrdenProductoService],
})
export class OrdenProductoModule {}
