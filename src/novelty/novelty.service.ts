import { Injectable } from '@nestjs/common';
import { CreateNoveltyDto } from './dto/create-novelty.dto';
import { UpdateNoveltyDto } from './dto/update-novelty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Novelty } from './entities/novelty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoveltyService {
  constructor(
    @InjectRepository(Novelty)
    private novetlyRepository: Repository <Novelty>
  ){}

  async create(createNoveltyDto: CreateNoveltyDto) {
    return await this.novetlyRepository.save(createNoveltyDto);
  }

  findAll() {
    return this.novetlyRepository.find();
  }

  findOne(id_novetly: number) {
    return this.novetlyRepository.findOneBy({id_novetly});
  }

  update(id_novetly: number, updateNoveltyDto: UpdateNoveltyDto) {
    return this.novetlyRepository.update({id_novetly}, updateNoveltyDto);
  }

  remove(id_novetly: number) {
    return this.novetlyRepository.softDelete({id_novetly}); 
  }
}
