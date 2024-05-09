// photo.dto.ts

import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePhotoDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  filename: string;

  @IsString()
  @IsNotEmpty()
  mimeType: string;

  // Add other properties as needed
}
