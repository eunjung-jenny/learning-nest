import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  search(year: string): Movie[] {
    return this.movies.filter((movie) => movie.year >= parseInt(year));
  }

  getOneById(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  create(movieData) {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
  }

  update(id: string, updateData) {
    const movie = this.getOneById(id);
    this.remove(id);
    this.movies.push({ ...movie, ...updateData });
  }

  remove(id: string) {
    this.getOneById(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
}
