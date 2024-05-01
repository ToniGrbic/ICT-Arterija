import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  create(createEventDto: CreateEventDto) {
    return this.prisma.events.create({ data: createEventDto });
  }

  findAll() {
    return this.prisma.events.findMany();
  }

  findOne(id: number) {
    return this.prisma.events.findUnique({ where: { id } });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.prisma.events.update({ data: updateEventDto, where: { id } });
  }

  remove(id: number) {
    return this.prisma.events.delete({ where: { id } });
  }
}
