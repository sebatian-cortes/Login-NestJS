import { Module } from '@nestjs/common';
import { CompanyUserService } from './company_user.service';
import { CompanyUserController } from './company_user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyUser } from './entities/company_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyUser])],
  controllers: [CompanyUserController],
  providers: [CompanyUserService],
  exports: [CompanyUserService]
})
export class CompanyUserModule {}
