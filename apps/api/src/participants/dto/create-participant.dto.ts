import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreateParticipantDto {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  event_id: number;

  @ApiProperty()
  @IsBoolean()
  is_working: boolean;

  @ApiProperty()
  @IsBoolean()
  is_valid: boolean;

  @ApiProperty()
  @IsBoolean()
  is_finished: boolean;
}
