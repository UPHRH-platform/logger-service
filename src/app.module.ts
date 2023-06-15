import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './controllers/events.controller';
import { LoggerService } from './services/logger.service';

@Module({
  imports: [],
  controllers: [AppController, EventsController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
