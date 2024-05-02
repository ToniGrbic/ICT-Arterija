import { Test, TestingModule } from '@nestjs/testing';
import { UserRewardsController } from './user_rewards.controller';
import { UserRewardsService } from './user_rewards.service';

describe('UserRewardsController', () => {
  let controller: UserRewardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRewardsController],
      providers: [UserRewardsService],
    }).compile();

    controller = module.get<UserRewardsController>(UserRewardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
