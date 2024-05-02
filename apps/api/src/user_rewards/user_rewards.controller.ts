import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRewardsService } from './user_rewards.service';
import { CreateUserRewardDto } from './dto/create-user_reward.dto';
import { UpdateUserRewardDto } from './dto/update-user_reward.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { userRewardsEntity } from './entities/user_reward.entity';

@ApiTags('UserRewards')
@Controller('user-rewards')
export class UserRewardsController {
  constructor(private readonly userRewardsService: UserRewardsService) {}

  @Post()
  @ApiOkResponse({ type: userRewardsEntity })
  create(@Body() createUserRewardDto: CreateUserRewardDto) {
    return this.userRewardsService.create(createUserRewardDto);
  }

  @Get()
  @ApiOkResponse({ type: userRewardsEntity })
  findAll() {
    return this.userRewardsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: userRewardsEntity })
  findOne(@Param('id') id: string) {
    return this.userRewardsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: userRewardsEntity })
  update(
    @Param('id') id: string,
    @Body() updateUserRewardDto: UpdateUserRewardDto,
  ) {
    return this.userRewardsService.update(+id, updateUserRewardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRewardsService.remove(+id);
  }
}
