import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/jwt.constant';
import { CompaniesModule } from 'src/companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { EncoderService } from './encoder.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';


@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d'},
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersRepository, AuthService, UsersService, JwtService, EncoderService,],
  exports: [AuthService, UsersRepository],
})
export class AuthModule {}
