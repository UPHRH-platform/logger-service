import { Controller, Post, Body, Inject } from '@nestjs/common';
import { LoggerService } from '../services/logger.service';

@Controller('events')
export class EventsController {
  constructor(@Inject(LoggerService) private readonly loggerService: LoggerService) {}

  @Post()
  logEvent(@Body() event: any): void {
    this.loggerService.logEvent(event);
  }
}