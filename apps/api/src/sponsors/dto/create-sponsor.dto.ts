import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSponsorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  image: string;
}
