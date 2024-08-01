import { Injectable } from '@nestjs/common';
import { CreateTaskAssignmentDto } from './dto/create-task_assignment.dto';
import { UpdateTaskAssignmentDto } from './dto/update-task_assignment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskAssignment } from './entities/task_assignment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskAssignmentService {
  constructor(
    @InjectRepository(TaskAssignment)
    private taskAssignmentRepository: Repository <TaskAssignment>
  ){}

  async create(createTaskAssignmentDto: CreateTaskAssignmentDto) {
    return await this.taskAssignmentRepository.save(createTaskAssignmentDto);
  }

  findAll() {
    return this.taskAssignmentRepository.find();
  }

  findOne(id_task_id_user: number) {
    return this.taskAssignmentRepository.findOneBy({id_task_id_user});
  }

  update(id_task_id_user: number, updateTaskAssignmentDto: UpdateTaskAssignmentDto) {
    return this.taskAssignmentRepository.update({id_task_id_user}, updateTaskAssignmentDto);
  }

  remove(id_task_id_user: number) {
    return this.taskAssignmentRepository.softDelete({id_task_id_user});
  }
}
