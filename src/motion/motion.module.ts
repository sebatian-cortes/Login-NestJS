import { Module } from '@nestjs/common';
import { MotionService } from './motion.service';
import { MotionController } from './motion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motion } from './entities/motion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Motion])],
  controllers: [MotionController],
  providers: [MotionService],
  exports: [MotionService]
})
export class MotionModule {}
