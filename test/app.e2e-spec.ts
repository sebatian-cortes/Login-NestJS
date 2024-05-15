import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import {UsersModule} from './../src/users/users.module'
import {UsersController} from './../src/users/users.controller'
import {CreateUserDto} from './../src/users/dto/create-user.dto'
import {UsersService} from  './../src/users/users.service'

describe('UsersController', () => {
  let controller: UsersController;
  const mockUsersModule={};
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({

      controllers:[UsersController],
      providers: [UsersService]

    })
    .overrideProvider(UsersService)
    .useValue(mockUsersModule)    
    .compile();

    controller = module.get<UsersController>(UsersController)
    
  });

  it('should be defined', ()=>{
    expect(controller).toBeDefined();
  })

  // it('should be defined', ()=>{
  //   expect(controller.create({name:'hola'})).toEqual({
  //     id
      
  //   })
  // })

  // it('/ (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/')
  //     .expect(200)
  //     .expect('Hello World!');
  // });
});
