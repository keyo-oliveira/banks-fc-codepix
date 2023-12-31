import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PixKeyGrpcUnknownErrorFilter } from './pix-keys/filters/pix-key-uknown-error.filter';
import { PixKeyAlreadyExistsErrorFilter } from './pix-keys/filters/pix-key-already-exists.error';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new PixKeyAlreadyExistsErrorFilter(),
    new PixKeyGrpcUnknownErrorFilter(),
  );

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
