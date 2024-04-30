import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(body: RegisterUserDto) {
    const { email, password } = body;
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);

    const user = await this.prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });

    const payload = {
      id: user.id,
      email: user.email,
      is_admin: false,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Invalid password');
    }

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.is_admin,
    };
    console.log({ token: this.jwtService.sign(payload), ...payload });
    return { token: this.jwtService.sign(payload), ...payload };
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
