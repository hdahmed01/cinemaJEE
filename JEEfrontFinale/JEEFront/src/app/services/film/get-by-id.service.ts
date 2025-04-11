import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetByIdService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/film';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir un film par ID
  getFilmById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
