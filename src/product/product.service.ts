import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ){}


  async  create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id_product: number) {
    return this.productRepository.findOneBy({id_product});
  }

  update(id_product: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update ({id_product}, updateProductDto);
  }

  remove(id_product: number) {
    return this.productRepository.softRemove({id_product});
  }
}
