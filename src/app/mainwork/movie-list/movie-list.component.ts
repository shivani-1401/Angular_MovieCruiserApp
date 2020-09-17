import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList = [];
  deleteList;
  constructor(private movieService: MovieService, private authService: AuthenticationService) { }

  public token = this.authService.getToken();

  ngOnInit() {

    this.movieService.getFavouriteList(this.token).subscribe(
      data => {
        this.movieList = data;
      });

  }

  deleteFromFavourites(id) {
    if (this.authService.isAuthenticated()) {
      this.movieList = this.movieList.filter(elem => {
        return elem.id !== id;
      });
      this.movieService.deleteMovie(id, this.token);
    }

  }
}
