import { Injectable, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, // Inyección del repositorio genérico
  ) {}

  async createUser(nombre: string, correo: string, contraseña: string): Promise<User> {
    const user = this.usersRepository.create({ nombre, correo, contraseña });

    try {
      return await this.usersRepository.save(user); // Devuelve la entidad guardada
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Este correo ya está registrado');
      }
      throw new InternalServerErrorException();
    }
  }

  async findOneByEmail(correo: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { correo } });
  }

  async findOneByResetPasswordToken(resetPasswordToken: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { resetPasswordToken } });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado con ese token');
    }

    return user;
  }

  async save(user: User): Promise<User> {
    return await this.usersRepository.save(user); // Método genérico para guardar un usuario
  }
}
