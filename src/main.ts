import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

if (process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Realworld API')
    .setDescription('My pet project for learning nest.js and postgres')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/swagger/index.html', app, document);

  await app.listen(3003);
}
bootstrap();
