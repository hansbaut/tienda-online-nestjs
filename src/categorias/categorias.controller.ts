import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@ApiTags('Categorías')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las categorías' })
  findAll() { return this.categoriasService.findAll(); }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener categoría por id con sus productos' })
  findOne(@Param('id') id: string) { return this.categoriasService.findOne(+id); }

  @Post()
  @ApiOperation({ summary: 'Crear una categoría' })
  create(@Body() dto: CreateCategoriaDto) { return this.categoriasService.create(dto); }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una categoría' })
  update(@Param('id') id: string, @Body() dto: UpdateCategoriaDto) { return this.categoriasService.update(+id, dto); }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una categoría' })
  remove(@Param('id') id: string) { return this.categoriasService.remove(+id); }
}
