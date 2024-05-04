import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserRewardsService } from './user_rewards.service';
import { CreateUserRewardDto } from './dto/create-user_reward.dto';
import { UpdateUserRewardDto } from './dto/update-user_reward.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { userRewardsEntity } from './entities/user_reward.entity';
import { AdminAuthGuard } from 'src/users/guards/admin-auth.guard';
import { UserAuthGuard } from 'src/users/guards/user-auth.guard';

@ApiTags('UserRewards')
@Controller('user-rewards')
@ApiBearerAuth()
export class UserRewardsController {
  constructor(private readonly userRewardsService: UserRewardsService) {}

  @Post()
  @ApiOkResponse({ type: userRewardsEntity })
  @UseGuards(AdminAuthGuard)
  create(@Body() createUserRewardDto: CreateUserRewardDto) {
    return this.userRewardsService.create(createUserRewardDto);
  }

  @Get()
  @ApiOkResponse({ type: userRewardsEntity })
  @UseGuards(AdminAuthGuard)
  findAll() {
    return this.userRewardsService.findAll();
  }

  @Get(':id')
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: userRewardsEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userRewardsService.findOne(id);
  }

  @Get('user')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: userRewardsEntity })
  findByUser(@Req() { user }) {
    return this.userRewardsService.findByUser(user.id);
  }

  @Patch(':id')
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: userRewardsEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserRewardDto: UpdateUserRewardDto,
  ) {
    return this.userRewardsService.update(id, updateUserRewardDto);
  }

  @Delete(':id')
  @UseGuards(AdminAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userRewardsService.remove(id);
  }
}
