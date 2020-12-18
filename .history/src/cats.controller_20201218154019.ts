/*
 * @Author: 王利
 * @Date: 2020-12-18 15:35:38
 * @LastEditors: 王利
 * @LastEditTime: 2020-12-18 15:40:19
 */
import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
