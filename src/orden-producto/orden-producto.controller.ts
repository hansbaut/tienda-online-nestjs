import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { OrdenProductoService } from './orden-producto.service';
import { CreateOrdenProductoDto } from './dto/create-orden-producto.dto';
import { UpdateOrdenProductoDto } from './dto/update-orden-producto.dto';

@ApiTags('OrdenProducto')
@Controller('orden_producto')
export class OrdenProductoController {
  constructor(private readonly ordenProductoService: OrdenProductoService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los orden-producto' })
  findAll() { return this.ordenProductoService.findAll(); }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener orden-producto por id' })
  findOne(@Param('id') id: string) { return this.ordenProductoService.findOne(+id); }

  @Post()
  @ApiOperation({ summary: 'Agregar producto a una orden' })
  create(@Body() dto: CreateOrdenProductoDto) { return this.ordenProductoService.create(dto); }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar cantidad o precio unitario' })
  update(@Param('id') id: string, @Body() dto: UpdateOrdenProductoDto) { return this.ordenProductoService.update(+id, dto); }

  @Delete(':id/productos/:productId')
  @ApiOperation({ summary: 'Quitar producto de una orden' })
  remove(@Param('id') id: string, @Param('productId') productId: string) {
    return this.ordenProductoService.remove(+id, +productId);
  }
}
