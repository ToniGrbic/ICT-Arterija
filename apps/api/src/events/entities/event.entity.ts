import { ApiProperty } from '@nestjs/swagger';

export class eventEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  location: string;

  @ApiProperty()
  city_id: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  organizer: string;
}
