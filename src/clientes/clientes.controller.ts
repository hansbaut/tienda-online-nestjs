import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los clientes' })
  findAll() { return this.clientesService.findAll(); }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener cliente por id con sus órdenes' })
  findOne(@Param('id') id: string) { return this.clientesService.findOne(+id); }

  @Post()
  @ApiOperation({ summary: 'Crear un cliente' })
  create(@Body() dto: CreateClienteDto) { return this.clientesService.create(dto); }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un cliente' })
  update(@Param('id') id: string, @Body() dto: UpdateClienteDto) { return this.clientesService.update(+id, dto); }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un cliente' })
  remove(@Param('id') id: string) { return this.clientesService.remove(+id); }
}
