import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { OrdenesService } from './ordenes.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';

@ApiTags('Órdenes')
@Controller('ordenes')
export class OrdenesController {
  constructor(private readonly ordenesService: OrdenesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las órdenes' })
  findAll() { return this.ordenesService.findAll(); }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener orden por id con sus productos' })
  findOne(@Param('id') id: string) { return this.ordenesService.findOne(+id); }

  @Post()
  @ApiOperation({ summary: 'Crear una orden' })
  create(@Body() dto: CreateOrdenDto) { return this.ordenesService.create(dto); }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar estado de la orden' })
  update(@Param('id') id: string, @Body() dto: UpdateOrdenDto) { return this.ordenesService.update(+id, dto); }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una orden' })
  remove(@Param('id') id: string) { return this.ordenesService.remove(+id); }
}
