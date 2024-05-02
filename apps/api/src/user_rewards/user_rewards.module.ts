import { Module } from '@nestjs/common';
import { UserRewardsService } from './user_rewards.service';
import { UserRewardsController } from './user_rewards.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserRewardsController],
  providers: [UserRewardsService],
})
export class UserRewardsModule {}
