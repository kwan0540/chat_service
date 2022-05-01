import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity'
import { Chat_room } from './message/entities/chat_room.entity';
import { Conversation_participants } from './message/entities/conversation_participants.entity';
import { Instant_message } from './message/entities/instant_message.entity';
import { MessageModule } from './message/message.module';


@Module({
  imports: [UserModule, AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    synchronize: true,
    loggin: true,
    database: 'postgres',
    entities: [User, Chat_room, Conversation_participants, Instant_message]
  }), MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
