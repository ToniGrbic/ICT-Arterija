import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';
import { Gender, Role } from '@prisma/client';

export class RegisterUserDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  surname: string;

  @ApiProperty()
  @IsDateString()
  birth_date: Date;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsString()
  gender: Gender;

  @ApiProperty()
  @IsString()
  role: Role;
}
