import { EmailService } from './email.service';
import { ResetPassworDto } from './dto/reset-password.dto';
import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthGuard } from './guard/auth.guard';
import { LoginCompanyDto } from './dto/loginCompany.dto';
import { RegisterCompanyDto } from './dto/registerCompany.dto';
import { RequestResetPasswordDto } from './dto/request-reset-password.dto';
// import { zip } from 'rxjs/operators';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService, 
    private readonly emailService: EmailService,
    private readonly userService: UsersService,
  ) {}

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
  @UseGuards(AuthGuard)
  registerCompany(
    @Request() req,
    @Body()
    registerCompanyDto: RegisterCompanyDto,
  ) {
    return this.authService.registerCompany(registerCompanyDto);
  }

  @Post('loginCompany')
  @UseGuards(AuthGuard)
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

  // @Patch('/request-reset-password')
  // requestResetPassword(@Body() requestResetPasswordDto: RequestResetPasswordDto): Promise <void>{
  //   return this.authService.requestResetPassword(requestResetPasswordDto);
  // }
  @Post('forgot-password')
async forgotPassword(@Body('correo') correo: string) {
  const token = await this.authService.generateResetPasswordToken(correo);
  await this.emailService.sendResetPasswordEmail(correo, token);
  return { message: 'Correo enviado para restablecer la contraseña' };
}

  // @Patch('/reset-password')
  // resetPassword(@Body () resetPasswordDto: ResetPassworDto): Promise <void>{
  //   return this.authService.resetPassword(resetPasswordDto);
  // }

  @Post('reset-password')
  async resetPassword(@Query('token') token: string, @Body('newPassword') newPassword: string) {
    const decoded = await this.authService.validateResetPasswordToken(token);
    const correo = decoded.correo;
  
    // Aquí actualizas la contraseña del usuario
    await this.userService.updatePassword(correo, newPassword);
    
    return { message: 'Contraseña actualizada con éxito' };
  }
  
}
