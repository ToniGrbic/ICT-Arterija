import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CitiesService {
  constructor(private prisma: PrismaService) {}

  create(createCityDto: CreateCityDto) {
    return this.prisma.cities.create({ data: createCityDto });
  }

  findAll() {
    return this.prisma.cities.findMany();
  }

  findOne(id: number) {
    return this.prisma.cities.findUnique({ where: { id } });
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return this.prisma.cities.update({ data: updateCityDto, where: { id } });
  }

  remove(id: number) {
    return this.prisma.cities.delete({ where: { id } });
  }
}
