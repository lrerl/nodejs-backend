import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle("Simple backend in NodeJS")
      .setDescription("Documentation")
      .setVersion("1.0")
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => `server has started at port ${PORT}`);

}
bootstrap();
