import { Controller, Get, Param } from '@nestjs/common';

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
}
