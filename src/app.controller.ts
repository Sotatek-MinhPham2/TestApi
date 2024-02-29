import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {TestDto} from "./gpt-emulator.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/gpt-emulator')
    getGptEmulator(@Body() dto:TestDto) {
        return this.appService.getGptEmulator(dto);
    }
}
