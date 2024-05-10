import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotosService } from './photos.service';
import { UploadPhotoDto } from './dto/upload-photo.dto';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadPhoto(@UploadedFile() file) {
    const uploadPhotoDto: UploadPhotoDto = {
      filename: file.originalname,
      mimeType: file.mimetype,
      imageData: file.buffer,
    };
    await this.photosService.uploadPhoto(uploadPhotoDto);
    return { message: 'Photo uploaded successfully' };
  }

  @Get(':id')
  async getPhoto(@Param('id') id: string) {
    const photos = await this.photosService.getPhoto(+id);
    if (photos.length > 0) {
      const photo = photos[0];
      if (photo.imageData) {
        const imageBase64 = Buffer.from(photo.imageData).toString('base64');
        return `data:${photo.mimeType};base64,${imageBase64}`;
      }
    }
    throw new Error("Photo not found or doesn't have image data");
  }

  @Get()
  async getPhotos() {
    return await this.photosService.getPhotos();
  }
}