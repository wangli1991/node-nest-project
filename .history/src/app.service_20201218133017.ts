/*
 * @Author: 王利
 * @Date: 2020-12-18 10:10:49
 * @LastEditors: 王利
 * @LastEditTime: 2020-12-18 13:30:16
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World1!';
  }
}
