import { ApiProperty } from '@nestjs/swagger';

export class rewardEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  sponsor_id: number;

  @ApiProperty()
  required_points: number;

  @ApiProperty()
  description: string;
}
