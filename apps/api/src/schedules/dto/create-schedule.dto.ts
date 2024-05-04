import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateScheduleDto {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  center_id: number;

  @ApiProperty({ default: new Date() })
  @IsString()
  date: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  is_finished: boolean;

  @ApiProperty({ default: true })
  @IsBoolean()
  is_valid: boolean;
}
