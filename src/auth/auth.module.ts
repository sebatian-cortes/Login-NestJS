import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/jwt.constant';
import { CompaniesModule } from 'src/companies/companies.module';
import { RolesModule } from 'src/roles/roles.module';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  imports: [
    UsersModule,
    CompaniesModule,
    RolesModule,
    ProfileModule,

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
