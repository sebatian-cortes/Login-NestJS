import { Injectable, Controller } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository <Task>
  ){}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save(createTaskDto);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id_task: number) {
    return this.taskRepository.findOneBy({id_task});
  }

  update(id_task: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update({id_task}, updateTaskDto);
  }

  remove(id_task: number) {
    return this.taskRepository.softRemove({id_task});
  }
}
