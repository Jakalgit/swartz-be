import { Module } from '@nestjs/common';
import { FormRequestController } from './form-request.controller';
import { FormRequestService } from './form-request.service';

@Module({
  controllers: [FormRequestController],
  providers: [FormRequestService]
})
export class FormRequestModule {}
