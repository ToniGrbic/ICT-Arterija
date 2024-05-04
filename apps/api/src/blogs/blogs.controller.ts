import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { blogEntity } from './entities/blog.entity';
import { AdminAuthGuard } from 'src/users/guards/admin-auth.guard';

@Controller('blogs')
@ApiTags('Blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: blogEntity })
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  @ApiOkResponse({ type: blogEntity })
  findAll() {
    return this.blogsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: blogEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: blogEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    return this.blogsService.update(id, updateBlogDto);
  }

  @Delete(':id')
  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.remove(id);
  }
}
