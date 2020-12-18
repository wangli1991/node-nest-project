/*
 * @Author: 王利
 * @Date: 2020-12-18 10:10:49
 * @LastEditors: 王利
 * @LastEditTime: 2020-12-18 15:11:49
 */
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Req() request): string {
    console.log(request);
    return this.appService.getHello();
  }
}
