import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { LoginCompanyDto } from './dto/loginCompany.dto';
import { RegisterCompanyDto } from './dto/registerCompany.dto';
import { CompaniesService } from 'src/companies/companies.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly companiesService: CompaniesService,
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

  async restoreUser({id}){

   return await this.usersService.restoreUserById(id)
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
}
