import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los productos' })
  findAll() { return this.productosService.findAll(); }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener producto por id con su categoría' })
  findOne(@Param('id') id: string) { return this.productosService.findOne(+id); }

  @Post()
  @ApiOperation({ summary: 'Crear un producto' })
  create(@Body() dto: CreateProductoDto) { return this.productosService.create(dto); }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un producto' })
  update(@Param('id') id: string, @Body() dto: UpdateProductoDto) { return this.productosService.update(+id, dto); }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un producto' })
  remove(@Param('id') id: string) { return this.productosService.remove(+id); }
}
