import { IsString, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ example: 'Juan Carlos' })
  @IsString()
  nombres: string;

  @ApiProperty({ example: 'Pérez' })
  @IsString()
  paterno: string;

  @ApiProperty({ example: 'García', required: false })
  @IsString()
  @IsOptional()
  materno?: string;

  @ApiProperty({ example: 'juan@email.com' })
  @IsEmail()
  email: string;
}
