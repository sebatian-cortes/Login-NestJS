import { Injectable } from '@nestjs/common';
import { CreateCompanyUserDto } from './dto/create-company_user.dto';
import { UpdateCompanyUserDto } from './dto/update-company_user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyUser } from './entities/company_user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyUserService {
  constructor(
    @InjectRepository(CompanyUser)
    private companyUserRepository: Repository <CompanyUser>
  ){}

  async create(createCompanyUserDto: CreateCompanyUserDto) {
    return await this.companyUserRepository.save(createCompanyUserDto);
  }

  findAll() {
    return this.companyUserRepository.find();
  }

  findOne(id_company_id_user: number) {
    return this.companyUserRepository.findOneBy({id_company_id_user});
  }

  update(id_company_id_user: number, updateCompanyUserDto: UpdateCompanyUserDto) {
    return this.companyUserRepository.update({id_company_id_user}, updateCompanyUserDto);
  }

  remove(id_company_id_user: number) {
    return this.companyUserRepository.softDelete({id_company_id_user});
  }
}
