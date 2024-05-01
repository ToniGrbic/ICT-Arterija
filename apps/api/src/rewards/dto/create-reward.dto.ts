import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateRewardDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  sponsor_id: number;

  @ApiProperty()
  @IsString()
  required_points: number;

  @ApiProperty()
  @IsString()
  description: string;
}
