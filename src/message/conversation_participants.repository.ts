import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Conversation_participants } from './entities/conversation_participants.entity'
import { Repository } from 'typeorm'


@Injectable()
export class ConversationParticipantsRepository {

    constructor(
        @InjectRepository(Conversation_participants)
        private ConversationParticipantsRepository: Repository<Conversation_participants>
    ) { }

    create(createMessageDto) {
        this.ConversationParticipantsRepository.insert(createMessageDto)
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

    async find_by_user(user_id: string) {
        const chat_room_information = await this.ConversationParticipantsRepository.query(`
        select p2.user_id, p2.chat_room_id, p2.isread, p2.created_at  from conversation_participants p1 inner join conversation_participants p2 on p1.chat_room_id = p2.chat_room_id where p1.user_id = $1;
`, [user_id])
        return chat_room_information
    }

    async find_by_chat_room(chat_room_id) {
        const chat_room_information = await this.ConversationParticipantsRepository.findBy({
            chat_room_id
        })
        console.log(chat_room_information)
    }
}