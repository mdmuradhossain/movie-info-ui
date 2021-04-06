import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  public getMovie(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movies/${movieId}`);
  }

  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.baseUrl}/movies`, movie);
  }

  public updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}/movies`, movie);
  }

  public deleteMovie(movieId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/movies/${movieId}`);
  }
}
