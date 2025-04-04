import { Body, Controller, Post } from "@nestjs/common";
import { FormRequestService } from "./form-request.service";
import { UserRequestDto } from "./dto/user-request.dto";

@Controller('form-request')
export class FormRequestController {

  constructor(private readonly formService: FormRequestService) {}

  @Post('/send')
  sendUserRequest(@Body() dto: UserRequestDto) {
    return this.formService.sendUserRequest(dto);
  }
}
