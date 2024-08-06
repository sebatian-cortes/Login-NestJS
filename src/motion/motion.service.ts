import { Injectable } from '@nestjs/common';
import { CreateMotionDto } from './dto/create-motion.dto';
import { UpdateMotionDto } from './dto/update-motion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Motion } from './entities/motion.entity';

@Injectable()
export class MotionService {
  constructor(
    @InjectRepository(Motion)
    private motionRepository: Repository<Motion>
  ){}


   async create(createMotionDto: CreateMotionDto) {
    return await this.motionRepository.save(createMotionDto);
  }

  findAll() {
    return this.motionRepository.find({
      relations: {
        product: true,
      }
    });
  }

  findOne(id_motion: number) {
    return this.motionRepository.findOneBy({id_motion});
  }

  update(id_motion: number, updateMotionDto: UpdateMotionDto) {
    return this.motionRepository.update({id_motion}, updateMotionDto);
  }

  remove(id_motion: number) {
    return this.motionRepository.softRemove({id_motion});
  }
}
