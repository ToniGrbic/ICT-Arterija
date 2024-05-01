import { ApiProperty } from '@nestjs/swagger';

export class Blog {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  author?: string;

  @ApiProperty()
  created_at: Date;
}
