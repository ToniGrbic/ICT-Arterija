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
import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { participantEntity } from './entities/participant.entity';
import { AdminAuthGuard } from 'src/users/guards/admin-auth.guard';
import { UserAuthGuard } from 'src/users/guards/user-auth.guard';

@Controller('participants')
@ApiTags('Participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: participantEntity })
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantsService.create(createParticipantDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: participantEntity })
  findAll() {
    return this.participantsService.findAll();
  }

  @Get('user')
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: participantEntity })
  findByUser(@Req() { user }) {
    return this.participantsService.findByUser(user.id);
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: participantEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.findOne(id);
  }

  @Get('event/:id')
  @ApiOkResponse({ type: participantEntity })
  findByEvent(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.findByEvent(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: participantEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateParticipantDto: UpdateParticipantDto,
  ) {
    return this.participantsService.update(id, updateParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.remove(id);
  }
}
