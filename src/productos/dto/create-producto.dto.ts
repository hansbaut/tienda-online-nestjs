import { IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty({ example: 'Laptop HP' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Laptop 15 pulgadas', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ example: 999.99 })
  @IsNumber()
  @IsPositive()
  precio: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  stock: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  idCategoria: number;
}
