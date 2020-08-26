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

  getFavouriteList(): Observable<MovieDetails[]> {
    return this.http.get<MovieDetails[]>(environment.localUrl);
  }

  deleteMovie(id: number) {
    const delURL = environment.localUrl + '/' + id;
    return this.http.delete(delURL).pipe(
      map((res: Response) => {
        return res.json;
      })
    );
  }

  addMovie(movie: MovieDetails): Observable<MovieDetails> {
    return this.http.post<MovieDetails>(environment.localUrl, movie);
  }
}
