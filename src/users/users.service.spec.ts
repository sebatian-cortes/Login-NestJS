import { Test, TestingModule } from '@nestjs/testing';
import {UsersService} from  './users.service'
import { UsersController } from './users.controller';
import { TypeOrmModule, getCustomRepositoryToken, getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Repository<User>
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        imports: [],
        controllers: [UsersController],
        providers: [UsersService,
          {
          provide: getRepositoryToken(User),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            findOne: jest.fn()

          }
        }],
        exports: [UsersService], 
    }).compile()

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User))
    })

    it("Servicios de usuarios", () => {
      expect(service).toBeDefined();
    })

    it('userRepository should be defined', () => {
      expect(userRepository).toBeDefined()
    })

    describe('createUser', () => {
      it('should create a new user with encoded password', async () =>{
  
        await service.create({
          correo: 'agudelo@gamil.com',
          contraseña: '123456',
          nombre: 'Sebastian',
          apellido: 'agudelo',
          edad: 21,
          telefono: '2145386174'
        })

        
      })
    })
})