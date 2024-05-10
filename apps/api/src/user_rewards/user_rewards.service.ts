import { Injectable } from '@nestjs/common';
import { CreateUserRewardDto } from './dto/create-user_reward.dto';
import { UpdateUserRewardDto } from './dto/update-user_reward.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRewardsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserRewardDto: CreateUserRewardDto) {
    return this.prisma.user_rewards.create({ data: createUserRewardDto });
  }

  findAll() {
    return this.prisma.user_rewards.findMany();
  }

  findOne(id: number) {
    return this.prisma.user_rewards.findUnique({ where: { id } });
  }

  findByUser(user_id: number) {
    return this.prisma.user_rewards.findMany({
      where: { user_id },
      include: { rewards: true },
    });
  }

  update(id: number, updateUserRewardDto: UpdateUserRewardDto) {
    return this.prisma.user_rewards.update({
      where: { id },
      data: updateUserRewardDto,
    });
  }

  remove(id: number) {
    return this.prisma.user_rewards.delete({ where: { id } });
  }
}
