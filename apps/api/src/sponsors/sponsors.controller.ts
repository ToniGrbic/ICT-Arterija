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
import { SponsorsService } from './sponsors.service';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { sponsorEntity } from './entities/sponsor.entity';
import { AdminAuthGuard } from 'src/users/guards/admin-auth.guard';

@Controller('sponsors')
@ApiTags('sponsors')
export class SponsorsController {
  constructor(private readonly sponsorsService: SponsorsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: sponsorEntity })
  create(@Body() createSponsorDto: CreateSponsorDto) {
    return this.sponsorsService.create(createSponsorDto);
  }

  @Get()
  @ApiOkResponse({ type: sponsorEntity })
  findAll() {
    return this.sponsorsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: sponsorEntity })
  findOne(@Param('id') id: string) {
    return this.sponsorsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: sponsorEntity })
  update(@Param('id') id: string, @Body() updateSponsorDto: UpdateSponsorDto) {
    return this.sponsorsService.update(+id, updateSponsorDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AdminAuthGuard)
  remove(@Param('id') id: string) {
    return this.sponsorsService.remove(+id);
  }
}
