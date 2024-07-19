import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require('cors')


  app.setGlobalPrefix('api/v1');

  app.use(cors())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const options = new DocumentBuilder()
  .setTitle('JHASS')
  .setDescription('Holam')
  .setVersion('1.0')
  .addTag('JHASS')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();
