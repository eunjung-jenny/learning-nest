import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'get all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `searching for movies made after: ${searchingYear}`;
  }

  @Get(':id')
  getOneById(@Param('id') id: string) {
    return `get one movie by ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `remove a movie with the id: ${id}`;
  }
}
