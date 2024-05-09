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
    const existingUser = await this.prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);

    const user = await this.prisma.users.create({
      data: {
        ...body,
        password: hashedPassword,
        role: 'User',
      },
    });

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      points: user.points,
      role: user.role,
      blood_type: user.blood_type,
      photos_id: user.photosId,
    };
    return { token: this.jwtService.sign(payload), ...payload };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.users.findUnique({
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
      surname: user.surname,
      role: user.role,
      points: user.points,
      blood_type: user.blood_type,
      photos_id: user.photosId,
    };

    return { token: this.jwtService.sign(payload), ...payload };
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const dataToUpdate: any = { ...updateUserDto };

    if (updateUserDto.password) {
      const saltRounds = 10;
      const hashedPassword = await hash(updateUserDto.password, saltRounds);
      dataToUpdate.password = hashedPassword;
    }

    return this.prisma.users.update({
      where: { id },
      data: dataToUpdate,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }

  async checkPassword(id: number, password: string) {
    const user = await this.prisma.users.findUnique({ where: { id } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return compare(password, user.password);
  }
}
