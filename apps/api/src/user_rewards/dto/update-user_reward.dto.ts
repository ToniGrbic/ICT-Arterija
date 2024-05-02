import { PartialType } from '@nestjs/swagger';
import { CreateUserRewardDto } from './create-user_reward.dto';

export class UpdateUserRewardDto extends PartialType(CreateUserRewardDto) {}
