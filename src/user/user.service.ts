import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository'


@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto): Promise<boolean> {
      const user = await this.userRepository.findLoginName(createUserDto.login_name)
      if (user) {
        return false
      }
    const created_user = await this.userRepository.create(createUserDto)
    return true
  }

  findAll(): Promise<User[]> {
    const users = this.userRepository.findAll()
    return users
  }

  async findOne(user_id: number): Promise<User[] | boolean> {
    const user = await this.userRepository.findOne(user_id)
    if (user.length === 0) {
      return false
    }
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findLoginName(name: string) {
    const user = this.userRepository.findLoginName(name)
    return user
  }
}
