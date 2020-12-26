import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'get all movies';
  }

  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return `get one movie by ${id}`;
  }

  @Post()
  create() {
    return 'create a movie';
  }

  @Patch('/:id')
  update(@Param('id') id: string) {
    return `update a movie with the id: ${id}`;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `remove a movie with the id: ${id}`;
  }
}
