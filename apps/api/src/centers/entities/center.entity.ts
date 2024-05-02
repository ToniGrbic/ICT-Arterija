import { ApiProperty } from '@nestjs/swagger';

export class centerEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  city_id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  image: string;
}
