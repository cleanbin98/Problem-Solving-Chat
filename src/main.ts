import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); //nest 프로젝트를 실행하기 위한 기본 설정
  app.useStaticAssets(join(__dirname, '..', 'UI')); //정적 파일 경로 지정
  await app.listen(3000);
}
bootstrap();