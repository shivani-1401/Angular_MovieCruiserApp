import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  getMovies(title: string) {
    return fetch(
      environment.baseURL + 'search/movie?query=' + title + '&api_key=' + environment.apiKey
    ).then(response => response.json());
    // return this.http.get(this.baseURL+'search/movie?query='+title+'&api_key='+this.apiKey)
    // .pipe(
    // map((response: any) => response.json)
    // );
  }

  getTrendingMovies() {
    return fetch(
      environment.baseURL + 'trending/movie/week?api_key=' + environment.apiKey
    ).then(response => response.json());
    // return this.http.get(
    //   this.baseURL + 'trending/movie/week?api_key=' + this.apiKey
    // ).pipe(map((response: any) => response.json)
    // );
  }

}
