import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantsService {
  constructor(private prisma: PrismaService) {}

  create(createParticipantDto: CreateParticipantDto) {
    return this.prisma.participants.create({ data: createParticipantDto });
  }

  findAll() {
    return this.prisma.participants.findMany();
  }

  findOne(id: number) {
    return this.prisma.participants.findUnique({ where: { id } });
  }

  findByEvent(event_id: number) {
    return this.prisma.participants.findMany({ where: { event_id } });
  }

  findByUser(user_id: number) {
    return this.prisma.participants.findMany({ where: { user_id } });
  }

  update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return this.prisma.participants.update({
      where: { id },
      data: updateParticipantDto,
    });
  }

  remove(id: number) {
    return this.prisma.participants.delete({ where: { id } });
  }
}
