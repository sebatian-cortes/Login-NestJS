import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor (
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ){}


  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id_category: number) {
    return this.categoryRepository.findOneBy({id_category});
  }

  update(id_category: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update({id_category}, updateCategoryDto);
  }

  remove(id_category: number) {
    return this.categoryRepository.softRemove({id_category});
  }
}
