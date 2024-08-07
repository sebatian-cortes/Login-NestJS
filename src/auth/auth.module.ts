import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/jwt.constant';
import { CompaniesModule } from 'src/companies/companies.module';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,

    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d'},
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
