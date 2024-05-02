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
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { eventEntity } from './entities/event.entity';
import { AdminAuthGuard } from 'src/users/guards/admin-auth.guard';

@Controller('events')
@ApiTags('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: eventEntity })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  @ApiOkResponse({ type: eventEntity })
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: eventEntity })
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: eventEntity })
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
