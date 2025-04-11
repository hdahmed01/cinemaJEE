import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutSalleServiceService {

  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/salle';  

  constructor(private http: HttpClient) { }

  // Méthode pour mettre à jour un salle
  updateFilm(salle: any): Observable<any> {
    return this.http.put(this.apiUrl, salle);
  }
}