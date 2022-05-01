import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.Guard';
import { Request as Req } from 'express' 

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto) {
    const created_user = await this.userService.create(createUserDto);
    if (!created_user) {
      throw new BadRequestException()
    }
    return ('You have created account successfully')
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':user_id')
  async findOne(@Param('user_id') user_id: number, @Request() req: Req) {
    // console.log(req.user)
    const user = await this.userService.findOne(user_id);
    if (!user) {
      throw new NotFoundException()
    }
    return user
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
