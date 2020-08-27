import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from '../movie';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getFavouriteList(user: string): Observable<any> {
    return this.http.get<any>(environment.localUrl + '/' + user);
  }

  deleteMovie(id: number, user: string) {
    const delURL = environment.localUrl + '/' + user + '/' + id;
    return this.http.delete(delURL).subscribe(
      data => {
        console.log(data);
      });
  }

  addMovie(movie: MovieDetails, user: string): Observable<MovieDetails> {
    return this.http.post<MovieDetails>(environment.localUrl + '/' + user, movie);
  }
}
