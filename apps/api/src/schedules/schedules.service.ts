import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from '../prisma/prisma.service';
import { schedules, users } from '@prisma/client';
import { Gender } from '@prisma/client';

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

  updateUser(user: users, nextEligibleDonationDate: Date) {
    return this.prisma.users.update({
      data: {
        points: user.points + 100,
        next_donation_date: nextEligibleDonationDate,
      },
      where: { id: user.id },
    });
  }

  remove(id: number) {
    return this.prisma.schedules.delete({
      where: { id },
    });
  }

  removeNotValid() {
    return this.prisma.schedules.deleteMany({
      where: { is_valid: false },
    });
  }

  async updateIsFinishedAndUser(schedule_id: number) {
    const schedule = await this.prisma.schedules.findUnique({
      where: { id: schedule_id },
    });

    if (!schedule) throw new Error('Schedule not found');
    if (schedule.is_finished) {
      throw new Error('Schedule is already finished');
    }

    const user = await this.prisma.users.findUnique({
      where: { id: schedule.user_id },
    });
    if (!user) throw new Error('User not found');

    const isExpired = await this.checkIsValidAndUpdate(schedule, user);
    if (isExpired) throw new Error('Schedule is expired');

    const updatedSchedule = await this.prisma.schedules.update({
      data: { is_finished: true },
      where: { id: schedule_id },
    });

    const nextEligibleDonationDate = this.setNextDonationDate(
      user,
      schedule.date,
    );

    await this.updateUser(user, nextEligibleDonationDate);
    return updatedSchedule;
  }

  setNextDonationDate(user: users, scheduleDate: Date) {
    let nextEligibleDonationDate = new Date(scheduleDate);

    if (user.gender === Gender.Male) {
      nextEligibleDonationDate.setMonth(
        nextEligibleDonationDate.getMonth() + 3,
      );
    } else if (user.gender === Gender.Female) {
      nextEligibleDonationDate.setMonth(
        nextEligibleDonationDate.getMonth() + 4,
      );
    }
    return nextEligibleDonationDate;
  }

  async checkIsValidAndUpdate(schedule: schedules, user: users) {
    const isExpired =
      Date.parse(schedule.date.toISOString()) < new Date().getTime();
    if (!isExpired) return true;

    await this.prisma.schedules.update({
      data: { is_valid: false },
      where: { id: user.id },
    });
    return false;
  }
}
