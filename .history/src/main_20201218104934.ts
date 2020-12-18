/*
 * @Author: 王利
 * @Date: 2020-12-18 10:10:49
 * @LastEditors: 王利
 * @LastEditTime: 2020-12-18 10:49:34
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8088);
}
bootstrap();
