import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCityDto {
  @ApiProperty()
  @IsString()
  name: string;
}
