import { Module } from '@nestjs/common';
import { SponsorsService } from './sponsors.service';
import { SponsorsController } from './sponsors.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SponsorsController],
  providers: [SponsorsService],
  imports: [PrismaModule],
})
export class SponsorsModule {}
