import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadPhotoDto } from './dto/upload-photo.dto';
import { Photos } from '@prisma/client';

@Injectable()
export class PhotosService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadPhoto(uploadPhotoDto: UploadPhotoDto) {
    const { filename, mimeType, imageData } = uploadPhotoDto;
    try {
      const photo = await this.prisma.photos.create({
        data: {
          filename,
          mimeType,
          imageData,
        },
      });
      return photo;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getPhotos() {
    try {
      return await this.prisma.photos.findMany();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getPhoto(id: number) {
    try {
      return await this.prisma.photos.findMany({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async changePhoto(
    id: number,
    uploadPhotoDto: UploadPhotoDto,
  ): Promise<Photos> {
    const photo = await this.prisma.photos.findUnique({
      where: {
        id,
      },
    });
    if (!photo) {
      throw new Error('Photo not found');
    }

    photo.filename = uploadPhotoDto.filename;
    photo.mimeType = uploadPhotoDto.mimeType;
    photo.imageData = uploadPhotoDto.imageData;

    return this.prisma.photos.update({
      where: {
        id,
      },
      data: photo,
    });
  }
}
