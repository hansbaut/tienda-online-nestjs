import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdenProductoDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  idOrden: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  idProducto: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @IsPositive()
  cantidad: number;

  @ApiProperty({ example: 999.99 })
  @IsNumber()
  @IsPositive()
  precio_unitario: number;
}
