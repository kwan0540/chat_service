import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Chat_room } from './entities/chat_room.entity'
import { Repository, DataSource } from 'typeorm'


@Injectable()
export class ChatRoomRepository {

    constructor(
        @InjectRepository(Chat_room)
        private ChatRoomRepository: Repository<Chat_room>
    ) {}

    create() {
        const chat_room = this.ChatRoomRepository.insert({})
        return chat_room
    }

    findAll() {
        return `This action returns all message`;
    }

    findOne(id: number) {
        return `This action returns a #${id} message`;
    }

    update(id: number, updateMessageDto: UpdateMessageDto) {
        return `This action updates a #${id} message`;
    }

    remove(id: number) {
        return `This action removes a #${id} message`;
    }

}