/*
 * @Author: 王利
 * @Date: 2020-12-18 10:10:49
 * @LastEditors: 王利
 * @LastEditTime: 2020-12-18 14:08:03
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
