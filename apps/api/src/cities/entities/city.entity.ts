import { ApiProperty } from '@nestjs/swagger';

export class cityEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
