import { Controller, Post, Body, Inject } from '@nestjs/common';
import { LoggerService } from '../services/logger.service';
import { Response } from "../interfaces/common.interface";

@Controller('events')
export class EventsController {
  constructor(@Inject(LoggerService) private readonly loggerService: LoggerService) {}

  @Post('/logEvent')
  logEvent(@Body() event: any): Response {
    return this.loggerService.logEvent(event);
  }
}