import { RequestResetPasswordDto } from './dto/request-reset-password.dto';
import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { LoginCompanyDto } from './dto/loginCompany.dto';
import { RegisterCompanyDto } from './dto/registerCompany.dto';
import { CompaniesService } from 'src/companies/companies.service';
import { User } from 'src/users/entities/user.entity';
import { UsersRepository } from 'src/auth/users.repository';
import { v4 as uuidv4 } from 'uuid';
import { ResetPassworDto } from './dto/reset-password.dto';
import { EncoderService } from './encoder.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly companiesService: CompaniesService,
    private readonly usersRepository: UsersRepository, // <- La inyección parece estar bien
    private encoderService: EncoderService,
    private jwtSecret = 'super secreto secreto'
  ) {}
  async register({ nombre, correo, contraseña, edad, telefono, apellido }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(correo);

    if (user) {
      throw new BadRequestException('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    return await this.usersService.create({
      nombre,
      edad,
      telefono,
      apellido,
      correo,
      contraseña: hashedPassword,
    });
  }

  
  async login({ correo, contraseña }: LoginDto) {
    const user = await this.usersService.findOneByEmail(correo);
    
    if (!user) {
      throw new UnauthorizedException('El correo electrónico es incorrecto');
    }

    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    if (!isPasswordValid) {
      throw new UnauthorizedException('La contraseña es incorrecta');
    }

    const payload = { correo: user.correo };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      correo
    };
  }

  async registerCompany({ email, name, sector, description,type,address }: RegisterCompanyDto) {
    
      const company = await this.usersService.findOneByEmail(email);

    if (company) {
      throw new BadRequestException('La empresa ya existe');
    }

    return await this.companiesService.create({
      name,
      sector,
      description,
      type,
      email,
      address,
    });  
  }

  async loginCompany({ email, rol }: LoginCompanyDto) {
    const company = await this.companiesService.findOneByEmail(email);

    
    if (!company) {
      throw new UnauthorizedException('El correo electrónico es incorrecto');
    }

    const payload = { email: company.email, rol: rol };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
      rol
    };
  }

  async requestResetPassword(requestResetPasswordDto: RequestResetPasswordDto): Promise<void> {
    const { correo } = requestResetPasswordDto;
    const user: User = await this.usersService.findOneByEmail(correo);

    if (!user) {
      throw new BadRequestException('No se encontró un usuario con ese correo');
    }

    // Genera el token y lo guarda en el usuario
    user.resetPasswordToken = uuidv4();

    // Guarda el usuario actualizado en el repositorio
    await this.usersRepository.save(user);
  }
  
  async resetPassword(resetPasswordDto: ResetPassworDto): Promise<void> {
    const { resetPasswordToken, contraseña } = resetPasswordDto;
    const user: User = await this.usersRepository.findOneByResetPasswordToken(resetPasswordToken);

    if (!user) {
      throw new BadRequestException('Token de restablecimiento de contraseña no válido');
    }

    // Actualiza la contraseña y resetea el token
    user.contraseña = await this.encoderService.encodePassword(contraseña);
    user.resetPasswordToken = null;

    // Guarda los cambios en el usuario
    await this.usersRepository.save(user); // <- De nuevo, guarda el usuario correctamente
  }

  async generateResetPasswordToken(userCorreo: string) {
    const payload = { correo: userCorreo };
    return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' }); // Token expira en 1 hora
  }

  async validateResetPasswordToken(token: string): Promise<JwtPayload> {
    try {
      return jwt.verify(token, this.jwtSecret) as JwtPayload;
    } catch (error) {
      throw new Error('Token inválido o expirado');
    }
  }
  
}
