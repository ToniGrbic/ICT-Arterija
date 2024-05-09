import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { BlogsModule } from './blogs/blogs.module';
import { CentersModule } from './centers/centers.module';
import { CitiesModule } from './cities/cities.module';
import { EventsModule } from './events/events.module';
import { RewardsModule } from './rewards/rewards.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { SchedulesModule } from './schedules/schedules.module';
import { ParticipantsModule } from './participants/participants.module';
import { UserRewardsModule } from './user_rewards/user_rewards.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    BlogsModule,
    CentersModule,
    CitiesModule,
    EventsModule,
    RewardsModule,
    SponsorsModule,
    SchedulesModule,
    ParticipantsModule,
    UserRewardsModule,
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
