import {BadRequestException, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {TestDto} from "./gpt-emulator.dto";
import {timeout} from "rxjs";
import {sleepInSeconds} from "./helper";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getGptEmulator(dto: TestDto) {
    await sleepInSeconds(25);
    throw new HttpException(
        'Too many requests, please try again later.',
        HttpStatus.TOO_MANY_REQUESTS,
    );
  }



}
