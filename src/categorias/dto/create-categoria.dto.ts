import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @ApiProperty({ example: 'Electrónica' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Productos electrónicos', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;
}