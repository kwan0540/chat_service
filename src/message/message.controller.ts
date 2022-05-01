import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards, Request } from '@nestjs/common';
import { MessageService } from './message.service';


@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createChatRoom): Promise<boolean> {
    return this.messageService.create_chat_room(createChatRoom);
  }

  @Get(':user_id')
  async get_chat_room_information(@Param('user_id') user_id: string) {
    const chat_room_information = await this.messageService.get_chat_room_information(user_id)
    const chat_room_information_filter_user = chat_room_information.filter(x => x.user_id !== parseInt(user_id))
    return {
      user_id: parseInt(user_id),
      chat_room_id: chat_room_information_filter_user[0].chat_room_id,
      participants_user_id: chat_room_information_filter_user.map(x => x.user_id)
    }
  }
}