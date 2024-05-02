import { Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SponsorsService {
  constructor(private prisma: PrismaService) {}

  create(createSponsorDto: CreateSponsorDto) {
    return this.prisma.sponsors.create({ data: createSponsorDto });
  }

  findAll() {
    return this.prisma.sponsors.findMany();
  }

  findOne(id: number) {
    return this.prisma.sponsors.findUnique({ where: { id } });
  }

  update(id: number, updateSponsorDto: UpdateSponsorDto) {
    return this.prisma.sponsors.update({
      data: updateSponsorDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.sponsors.delete({ where: { id } });
  }
}
