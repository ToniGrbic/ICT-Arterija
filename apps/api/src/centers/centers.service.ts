import { Injectable } from '@nestjs/common';
import { CreateCenterDto } from './dto/create-center.dto';
import { UpdateCenterDto } from './dto/update-center.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CentersService {
  constructor(private prisma: PrismaService) {}

  create(createCenterDto: CreateCenterDto) {
    return this.prisma.centers.create({ data: createCenterDto });
  }

  findAll() {
    return this.prisma.centers.findMany();
  }

  findOne(id: number) {
    return this.prisma.centers.findUnique({ where: { id } });
  }

  update(id: number, updateCenterDto: UpdateCenterDto) {
    return this.prisma.centers.update({ data: updateCenterDto, where: { id } });
  }

  remove(id: number) {
    return this.prisma.centers.delete({ where: { id } });
  }
}
