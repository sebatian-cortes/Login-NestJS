import { User } from 'src/users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { SaleModule } from './sale/sale.module';
import { TaskModule } from './task/task.module';
import { PayModule } from './pay/pay.module';
import { NoveltyModule } from './novelty/novelty.module';
import { PaymentHistoryModule } from './payment_history/payment_history.module';
import { CategoryModule } from './category/category.module';
import { MotionModule } from './motion/motion.module';
import { CompanyUserModule } from './company_user/company_user.module';
import { ProductModule } from './product/product.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Category } from './category/entities/category.entity';
import { Company } from './companies/entities/company.entity';
import { Motion } from './motion/entities/motion.entity';
import { PaymentHistory } from './payment_history/entities/payment_history.entity';
import { Pay } from './pay/entities/pay.entity';
import { Product } from './product/entities/product.entity';
import { Sale } from './sale/entities/sale.entity';
import { Task } from './task/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'JHASS',
      entities: [Category, Company, Motion, User, PaymentHistory, Pay, Product, Sale, Task],
      autoLoadEntities: true,
      synchronize: false,
    }),
    
    
    UsersModule,
    AuthModule,
    CompaniesModule,
    SaleModule,
    TaskModule,
    NoveltyModule,
    PaymentHistoryModule,
    PayModule,
    CategoryModule,
    MotionModule,
    CompanyUserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
