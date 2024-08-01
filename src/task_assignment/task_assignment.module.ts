import { Module } from '@nestjs/common';
import { TaskAssignmentService } from './task_assignment.service';
import { TaskAssignmentController } from './task_assignment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskAssignment } from './entities/task_assignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskAssignment])],
  controllers: [TaskAssignmentController],
  providers: [TaskAssignmentService],
  exports: [TaskAssignmentService]
})
export class TaskAssignmentModule {}
