import { Injectable } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RewardsService {
  constructor(private prisma: PrismaService) {}

  create(createRewardDto: CreateRewardDto) {
    return this.prisma.rewards.create({ data: createRewardDto });
  }

  findAll() {
    return this.prisma.rewards.findMany();
  }

  findOne(id: number) {
    return this.prisma.rewards.findUnique({ where: { id } });
  }

  update(id: number, updateRewardDto: UpdateRewardDto) {
    return this.prisma.rewards.update({ data: updateRewardDto, where: { id } });
  }

  remove(id: number) {
    return this.prisma.rewards.delete({ where: { id } });
  }
}
