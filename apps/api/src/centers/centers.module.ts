import { Module } from '@nestjs/common';
import { CentersService } from './centers.service';
import { CentersController } from './centers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CentersController],
  providers: [CentersService],
})
export class CentersModule {}
