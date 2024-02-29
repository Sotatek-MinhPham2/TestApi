import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function swagger(app) {
  const config = new DocumentBuilder()
      .setTitle('awayday docs')
      .setDescription('awayday API description')
      .setVersion('1.0')
      .addTag('json')
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await swagger(app);
  await app.listen(9999);
}
bootstrap();
