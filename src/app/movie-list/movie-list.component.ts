import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList = [];
  deleteList;
  constructor(private movieService: MovieService) {}

  delete(id: number) {
    this.movieService
      .deleteMovie(id)
      .subscribe(data => (this.deleteList = data));
    return this.deleteList;
  }

  ngOnInit() {
    this.movieService
      .getFavouriteList()
      .subscribe(fullList => (this.movieList = fullList));
  }
}
