import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsNumber()
  city_id: number;

  @ApiProperty({ default: new Date().toISOString() })
  @IsString()
  date: string;

  @ApiProperty()
  @IsString()
  organizer: string;
}
