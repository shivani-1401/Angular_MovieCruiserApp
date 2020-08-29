import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movies = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getTrendingMovies()
      .then(response => this.movies = response.results);
  }
}


