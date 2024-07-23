import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { StockModule } from './stock/stock.module';
import { SaleModule } from './sale/sale.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'JHASS',
      autoLoadEntities: true,
      synchronize: true,
    }),
    
    
    UsersModule,
    AuthModule,
    CompaniesModule,
    StockModule,
    SaleModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
