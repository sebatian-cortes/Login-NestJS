import { Module } from '@nestjs/common';
import { UserEventService } from './user_event.service';
import { UserEventController } from './user_event.controller';

@Module({
  controllers: [UserEventController],
  providers: [UserEventService],
})
export class UserEventModule {}
