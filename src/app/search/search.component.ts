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
  movies: MovieDetails = [];
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
      const myToken = this.authService.getToken();
      this.movieService.addMovie(mov, myToken).subscribe(data => (this.movies = data));
    } else {
      this.route.navigate(['./login']);
    }
    console.log(this.movies);
  }
  ngOnInit() { 
  }
}
