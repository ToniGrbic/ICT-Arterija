import { IsString, IsNotEmpty, IsMimeType } from 'class-validator';

export class UploadPhotoDto {
  @IsString()
  @IsNotEmpty()
  filename: string;

  @IsMimeType()
  @IsNotEmpty()
  mimeType: string;

  imageData: Buffer;
}
