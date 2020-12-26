import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
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
  // service 와 연결
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return this.moviesService.search(searchingYear);
  }

  @Get(':id')
  getOneById(@Param('id') id: string): Movie {
    return this.moviesService.getOneById(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData) {
    return this.moviesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
