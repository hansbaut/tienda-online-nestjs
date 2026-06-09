import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdenDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  idCliente: number;

  @ApiProperty({ example: 'pendiente', required: false })
  @IsString()
  @IsOptional()
  estado?: string;

  @ApiProperty({ example: 0, required: false })
  @IsNumber()
  @IsOptional()
  total?: number;
}
