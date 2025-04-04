import { Injectable } from '@nestjs/common';
import { Telegraf } from "telegraf";
import { ConfigService } from '@nestjs/config';
import { UserRequestDto } from "./dto/user-request.dto";

@Injectable()
export class FormRequestService {
  private bot: Telegraf;

  constructor(private configService: ConfigService) {
    const token = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    this.bot = new Telegraf(token);
  }

  async sendUserRequest(dto: UserRequestDto) {
    const chatId = this.configService.get<number>('TELEGRAM_CHAT_ID');
    const message =
      `<b>- - - - Новый запрос - - - -</b>\n\n<b>Имя:</b> ${dto.name}\n<b>E-Mail:</b> ${dto.email}\n<b>Сообщение:</b> ${dto.message}`

    await this.bot.telegram.sendMessage(chatId, message, {
      parse_mode: "HTML",
    });
  }

}
