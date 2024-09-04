import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { TaskModule } from './task/task.module';
import { ProductModule } from './product/product.module';
import { ProfileModule } from './profile/profile.module';
import { RolesModule } from './roles/roles.module';
// import { EmailModule } from './email/email.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'databasejhass.cbs6qceyqazt.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'quebendicionve777',
      database: 'jhass',
      autoLoadEntities: true,
      synchronize: true,
    }),


    UsersModule,
    AuthModule,
    CompaniesModule,
    TaskModule,
    ProductModule,
    ProfileModule,
    RolesModule,
    // EmailModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}