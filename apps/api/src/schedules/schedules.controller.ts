import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserAuthGuard } from '../users/guards/user-auth.guard';
import { StaffAuthGuard } from 'src/users/guards/staff-auth.guard';
import { AdminAuthGuard } from 'src/users/guards/admin-auth.guard';
import { StaffOrAdminAuthGuard } from 'src/users/guards/staff-or-admin-auth.guard';
import { ScheduleEntity } from './entities/schedule.entity';

@ApiTags('schedules')
@Controller('schedules')
@ApiBearerAuth()
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  @ApiCreatedResponse({ type: ScheduleEntity })
  @UseGuards(UserAuthGuard)
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto);
  }

  @Get()
  @ApiOkResponse({ type: [ScheduleEntity] })
  @UseGuards(AdminAuthGuard)
  findAll() {
    return this.schedulesService.findAll();
  }

  @Get(':id')
  @UseGuards(StaffOrAdminAuthGuard)
  @ApiOkResponse({ type: ScheduleEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.schedulesService.findOne(id);
  }

  @Get('center/:center_id')
  @UseGuards(StaffOrAdminAuthGuard)
  @ApiResponse({ type: ScheduleEntity })
  findByCenter(@Param('center_id', ParseIntPipe) center_id: number) {
    return this.schedulesService.findByCenter(center_id);
  }

  @Get('user/:user_id')
  @ApiOkResponse({ type: [ScheduleEntity] })
  @UseGuards(UserAuthGuard)
  findByUser(@Param('user_id', ParseIntPipe) user_id: number) {
    return this.schedulesService.findByUser(user_id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ScheduleEntity })
  @UseGuards(StaffOrAdminAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.schedulesService.update(id, updateScheduleDto);
  }

  @Patch('finished/:id')
  @ApiOkResponse({ type: ScheduleEntity })
  @UseGuards(StaffAuthGuard)
  updateIsFinishedAndUser(@Param('id', ParseIntPipe) id: number) {
    return this.schedulesService.updateIsFinishedAndUser(id);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ScheduleEntity })
  @UseGuards(AdminAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.schedulesService.remove(+id);
  }

  @Delete('not-valid')
  @ApiOkResponse({ type: ScheduleEntity })
  @UseGuards(AdminAuthGuard)
  removeNotValid() {
    return this.schedulesService.removeNotValid();
  }
}
