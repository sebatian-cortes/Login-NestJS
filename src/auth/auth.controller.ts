import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthGuard } from './guard/auth.guard';
import { LoginCompanyDto } from './dto/loginCompany.dto';
import { RegisterCompanyDto } from './dto/registerCompany.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ChangePasswordDto } from './dto/change-password.dto';

@ApiTags('auth')
@ApiBearerAuth()
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
  @UseGuards(AuthGuard)
  profile(@Request() req) {
    return req.user;
  }

@UseGuards(AuthGuard)
@Put('change-password')
async changePassword(@Request() req, @Body() changePasswordDto: ChangePasswordDto) {
  const { oldPassword, newPassword } = changePasswordDto;
  const id_usuario = req.user.id_usuario;  // Esto debería funcionar si el token es decodificado correctamente
  return this.authService.changePassword(id_usuario, oldPassword, newPassword);
}
}
