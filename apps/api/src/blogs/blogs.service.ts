import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBlogDto: CreateBlogDto) {
    return this.prisma.blogs.create({ data: createBlogDto });
  }

  findAll() {
    return this.prisma.blogs.findMany();
  }

  findOne(id: number) {
    return this.prisma.blogs.findUnique({ where: { id } });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blogs.update({ where: { id }, data: updateBlogDto });
  }

  remove(id: number) {
    return this.prisma.blogs.delete({ where: { id } });
  }
}
