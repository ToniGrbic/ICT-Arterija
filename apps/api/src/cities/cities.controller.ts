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
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { cityEntity } from './entities/city.entity';
import { AdminAuthGuard } from 'src/users/guards/admin-auth.guard';

@Controller('cities')
@ApiTags('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @ApiOkResponse({ type: cityEntity })
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  @ApiOkResponse({ type: cityEntity })
  findAll() {
    return this.citiesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: cityEntity })
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: cityEntity })
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.citiesService.update(+id, updateCityDto);
  }

  @Delete(':id')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }
}
