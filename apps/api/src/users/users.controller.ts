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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserEntity } from './entities/user.entity';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { StaffOrAdminAuthGuard } from './guards/staff-or-admin-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';
import { ChangePasswordUserDto } from './dto/change-password-user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  @UseGuards(AdminAuthGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('register')
  @ApiCreatedResponse({ type: UserEntity })
  register(
    @Body()
    {
      email,
      name,
      surname,
      password,
      gender,
      birth_date,
      location,
      role,
    }: RegisterUserDto,
  ) {
    return this.usersService.register({
      email,
      name,
      surname,
      password,
      gender,
      birth_date,
      location,
      role,
    });
  }

  @Post('login')
  @ApiOkResponse({ type: UserEntity })
  login(@Body() { email, password }: LoginUserDto) {
    return this.usersService.login(email, password);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(StaffOrAdminAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(StaffOrAdminAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post('/check-password/:id')
  @ApiBearerAuth()
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: Boolean })
  checkPassword(
    @Param('id') id: string,
    @Body() { password }: ChangePasswordUserDto,
  ) {
    return this.usersService.checkPassword(+id, password);
  }

  @Get('/email/:email')
  @ApiOkResponse({ type: UserEntity })
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(UserAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AdminAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
