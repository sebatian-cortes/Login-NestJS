import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('usuario')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id_usuario')
  findOne(@Param('id_usuario') id_usuario: string) {
    return this.usersService.findOne(+id_usuario);
  }

  @Patch(':id_usuario')
  update(@Param('id_usuario') id_usuario: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id_usuario, updateUserDto);
  }

  @Delete(':id_usuario')
  remove(@Param('id_usuario') id_usuario: string) {
    return this.usersService.remove(+id_usuario);
  }
}
