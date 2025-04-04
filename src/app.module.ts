import { Module } from '@nestjs/common';
import { FormRequestModule } from './form-request/form-request.module';
import { FormRequestController } from "./form-request/form-request.controller";
import { ConfigModule } from "@nestjs/config";
import * as path from "node:path";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [path.join(__dirname, '../.env')],
      isGlobal: true,
    }),
    FormRequestModule
  ],
})
export class AppModule {}
