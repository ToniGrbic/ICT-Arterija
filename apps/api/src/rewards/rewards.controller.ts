import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RewardsService } from './rewards.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { rewardEntity } from './entities/reward.entity';
import { AdminAuthGuard } from 'src/users/guards/admin-auth.guard';

@Controller('rewards')
@ApiTags('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @Post()
  @ApiOkResponse({ type: rewardEntity })
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  create(@Body() createRewardDto: CreateRewardDto) {
    return this.rewardsService.create(createRewardDto);
  }

  @Get()
  @ApiOkResponse({ type: rewardEntity })
  findAll() {
    return this.rewardsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: rewardEntity })
  findOne(@Param('id') id: string) {
    return this.rewardsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: rewardEntity })
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateRewardDto: UpdateRewardDto) {
    return this.rewardsService.update(+id, updateRewardDto);
  }

  @Delete(':id')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.rewardsService.remove(+id);
  }
}
