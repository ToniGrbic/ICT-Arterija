import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}
  create(createScheduleDto: CreateScheduleDto) {
    return this.prisma.schedules.create({
      data: createScheduleDto,
    });
  }

  findAll() {
    return this.prisma.schedules.findMany();
  }

  findOne(id: number) {
    return this.prisma.schedules.findUnique({
      where: { id },
    });
  }

  findByUser(user_id: number) {
    return this.prisma.schedules.findMany({
      where: { user_id },
    });
  }

  findByCenter(center_id: number) {
    return this.prisma.schedules.findMany({
      where: { center_id },
    });
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return this.prisma.schedules.update({
      data: updateScheduleDto,
      where: { id },
    });
  }

  async updateIsFinishedAndUserPoints(schedule_id: number) {
    const schedule = await this.prisma.schedules.findUnique({
      where: { id: schedule_id },
    });

    if (!schedule) {
      throw new Error('Schedule not found');
    }

    const user = await this.prisma.users.findUnique({
      where: { id: schedule.user_id },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (schedule.is_finished || !schedule.is_valid) {
      throw new Error('Schedule is already finished or invalid');
    }

    const isExpired =
      Date.parse(schedule.date.toISOString()) < new Date().getTime();
    if (isExpired) {
      await this.prisma.schedules.update({
        data: { is_valid: false },
        where: { id: user.id },
      });
      throw new Error('Schedule date is expired');
    }

    const updatedSchedule = await this.prisma.schedules.update({
      data: { is_finished: true },
      where: { id: schedule_id },
    });

    await this.prisma.users.update({
      data: { points: user.points + 100 },
      where: { id: user.id },
    });

    return updatedSchedule;
  }

  remove(id: number) {
    return this.prisma.schedules.delete({
      where: { id },
    });
  }
}
