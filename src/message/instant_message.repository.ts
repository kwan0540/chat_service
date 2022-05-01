import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Instant_message } from './entities/instant_message.entity';


@Injectable()
export class InstantMessageRepository {

    constructor(
        @InjectRepository(Instant_message)
        private InstantMessageRepository: Repository<Instant_message>
    ) { }

    create(createMessageDto) {
        console.log(typeof(createMessageDto))
        const chat_room = this.InstantMessageRepository.insert(createMessageDto)
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

    create_chat_room() {
        return 'create chat room'
    }
}