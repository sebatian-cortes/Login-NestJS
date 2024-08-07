import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { TaskModule } from './task/task.module';
import { ProductModule } from './product/product.module';


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
    TaskModule,
    ProductModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
