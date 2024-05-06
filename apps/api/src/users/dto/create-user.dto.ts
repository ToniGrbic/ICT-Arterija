import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsString } from 'class-validator';
import { BloodTypes, Role, Gender } from '@prisma/client';

export class CreateUserDto {
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

  @ApiProperty({ nullable: true })
  @IsString()
  blood_type?: BloodTypes;

  @ApiProperty()
  @IsString()
  can_donate: boolean;

  @ApiProperty()
  @IsString()
  role: Role;

  @ApiProperty({ nullable: true })
  @IsDate()
  next_donation_date?: Date;
}
