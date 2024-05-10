import { ApiProperty } from '@nestjs/swagger';

export class participantEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  event_id: number;

  @ApiProperty()
  is_working: boolean;

  @ApiProperty()
  is_valid: boolean;

  @ApiProperty()
  is_finished: boolean;
}
