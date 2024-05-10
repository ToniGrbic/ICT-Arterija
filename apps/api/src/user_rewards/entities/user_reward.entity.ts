import { ApiProperty } from '@nestjs/swagger';

export class userRewardsEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  reward_id: number;

  @ApiProperty()
  created_at: string;
}
