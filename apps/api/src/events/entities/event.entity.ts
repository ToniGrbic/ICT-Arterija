import { ApiProperty } from '@nestjs/swagger';

export class eventEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city_id: number;

  @ApiProperty()
  date: string;

  @ApiProperty()
  organizer: string;

  @ApiProperty({ default: 'https://via.placeholder.com/150' })
  image: string;
}
