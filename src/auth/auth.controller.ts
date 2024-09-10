import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthGuard } from './guard/auth.guard';
import { RolesGuard } from './guard/roles.guard';
import { LoginCompanyDto } from './dto/loginCompany.dto';
import { RegisterCompanyDto } from './dto/registerCompany.dto';
import { Roles } from './decorators/roles.decorator';
import { Rank } from './enums/rol.enum';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

  @Post('registerCompany')
  // @UseGuards(AuthGuard)
  registerCompany(
    @Request() req,
    @Body()
    registerCompanyDto: RegisterCompanyDto,
  ) {
    return this.authService.registerCompany(registerCompanyDto);
  }

  @Post('loginCompany')
  // @UseGuards(AuthGuard)
 

  loginCompany(
    @Request() req,
    @Body()
    loginCompanyDto: LoginCompanyDto,
  ) {
    return this.authService.loginCompany(loginCompanyDto);
  }

  @Get('profile')
  @UseGuards(RolesGuard)
  @Roles(Rank.ONE)
  profile(@Request() req) {
    return req.user;
  }

}
