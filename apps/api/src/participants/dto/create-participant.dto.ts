import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreateParticipantDto {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  event_id: number;

  @ApiProperty({ default: true })
  @IsBoolean()
  is_working: boolean;

  @ApiProperty({ default: true })
  @IsBoolean()
  is_valid: boolean;

  @ApiProperty({ default: false })
  @IsBoolean()
  is_finished: boolean;
}
