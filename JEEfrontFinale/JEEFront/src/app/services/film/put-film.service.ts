import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PutFilmService {

  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/film';  

  constructor(private http: HttpClient) { }

  // Méthode pour mettre à jour un film
  updateFilm(film: any): Observable<any> {
    return this.http.put(this.apiUrl, film);
  }
}
