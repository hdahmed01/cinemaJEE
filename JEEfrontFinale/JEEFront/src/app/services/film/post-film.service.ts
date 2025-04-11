import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostFilmService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/film';

  constructor(private http: HttpClient) { }
  createFilm(film: { name: string }): Observable<any> {
    return this.http.post(this.apiUrl, film);
  }
}
