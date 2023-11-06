import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // add prefix to all routes
  app.setGlobalPrefix('api');

  const PORT = process.env.PORT || 80;

  await app.listen(PORT, () => {
    console.log(`Server running in PORT - ${PORT}`);
  });
}
bootstrap();
