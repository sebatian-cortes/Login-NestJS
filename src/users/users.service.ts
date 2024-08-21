import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/auth/users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly usersRepository: UsersRepository,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findOneByEmail(correo: string) {
    return this.userRepository.findOneBy({ correo });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id_usuario: number) {
    return this.userRepository.findOneBy({ id_usuario });
  }

  //falta que funcione
  update(id_usuario: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id_usuario}, updateUserDto);
  }

  remove(id_usuario: number) {
    return this.userRepository.softDelete(id_usuario);
  }
  async updatePassword(correo: string, newPassword: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Supón que tienes un método para encontrar al usuario por su email y actualizar la contraseña
    const user = await this.usersRepository.findOneByEmail(correo);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    user.contraseña = hashedPassword;
    await this.userRepository.save(user);
  }
}
