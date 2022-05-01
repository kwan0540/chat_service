import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instant_message } from './entities/instant_message.entity';
import { Conversation_participants } from './entities/conversation_participants.entity';
import { Chat_room } from './entities/chat_room.entity';
import { ChatRoomRepository } from './chat_room.repository'
import { ConversationParticipantsRepository } from './conversation_participants.repository';
import { MessageController } from './message.controller'
import { InstantMessageRepository } from './instant_message.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Instant_message, Conversation_participants, Chat_room])],
  controllers: [MessageController],
  providers: [MessageGateway, MessageService, ChatRoomRepository, ConversationParticipantsRepository, InstantMessageRepository]
})
export class MessageModule {}
