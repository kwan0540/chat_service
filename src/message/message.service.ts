import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { ChatRoomRepository } from './chat_room.repository'
import { ConversationParticipantsRepository } from './conversation_participants.repository';
import { InstantMessageRepository } from './instant_message.repository';

@Injectable()
export class MessageService {

  constructor(private readonly chatRoomRepository: ChatRoomRepository,
    private readonly conversationParticipantsRepository: ConversationParticipantsRepository,
    private readonly instantMessageRepository: InstantMessageRepository) {}

  create(createMessageDto) {
    const message = this.instantMessageRepository.create(createMessageDto)
    return message
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

  async create_chat_room(createMessageDto): Promise<boolean> {
    const chat_room = await this.chatRoomRepository.create()
    console.log(chat_room)
    const user_id: number[] = createMessageDto.user_ids
    user_id.map(x => this.conversationParticipantsRepository.create({
      user_id: x,
      chat_room_id: chat_room.identifiers[0].id
    }))
    return true
  }

  get_chat_room_information(user_id: string) {
    const chat_room_information = this.conversationParticipantsRepository.find_by_user(user_id)
    return chat_room_information
  }
}
