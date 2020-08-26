import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { SearchService } from '../services/search.service';
import { MovieDetails } from '../movie';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title: string;
  movies = [];
  movie = new MovieDetails();
  constructor(private route: Router, private movieService: MovieService, private searchService: SearchService, private authService: AuthenticationService) { }
  getMovie(title: string) {
    // this.searchService.getMovies(title)
    // .subscribe(data => { this.movies = data.results },
    // error => { console.log(error.message) }
    // )
    this.searchService.getMovies(title)
      .then(response => this.movies = response.results);
  }

  add(mov) {
    if (this.authService.isAuthenticated()) {
      this.movie.id = mov.id;
      this.movie.movieName = mov.original_title;
      this.movie.movieYear = mov.release_date;
      this.movie.rating = mov.vote_average;
      return this.movieService.addMovie(this.movie).subscribe(data => (this.movie = data));
    } else {
      this.route.navigate(['./login']);
    }
  }
  ngOnInit() { }
}
