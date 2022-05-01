import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserRepository {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto): Promise<CreateUserDto> {
    const user = await this.userRepository.insert(createUserDto); 
    return user
  }

  findAll(): Promise<User[]> {
    const users = this.userRepository.find()
    return users
  }

  findOne(user_id: number): Promise<User[]> {
    const user = this.userRepository.findBy({
        id: user_id
    })
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findLoginName(login_name: string): Promise<User> {
    const user = this.userRepository.findOneBy({
        login_name: login_name
    })
    return user
  }
}
