/*
 * @Author: 王利
 * @Date: 2020-12-18 15:35:38
 * @LastEditors: 王利
 * @LastEditTime: 2020-12-18 15:41:19
 */
import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
