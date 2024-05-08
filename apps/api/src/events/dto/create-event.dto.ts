import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNumber()
  city_id: number;

  @ApiProperty({ default: new Date().toISOString() })
  @IsString()
  date: string;

  @ApiProperty()
  @IsString()
  organizer: string;

  @ApiProperty({ required: false, default: 'https://via.placeholder.com/150' })
  @IsString()
  image: string;
}
