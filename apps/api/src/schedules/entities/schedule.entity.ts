import { ApiProperty } from '@nestjs/swagger';

export class ScheduleEntity {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  center_id: number;

  @ApiProperty()
  date: string;

  @ApiProperty()
  is_finished: boolean;

  @ApiProperty()
  is_valid: boolean;

  @ApiProperty()
  created_at: string;
}
