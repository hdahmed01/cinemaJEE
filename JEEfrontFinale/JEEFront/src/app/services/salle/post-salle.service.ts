import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostSalleService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/salle';

  constructor(private http: HttpClient) { }
  createSalle(salle: { nom: string,adresse: string,capacite: number}): Observable<any> {
    return this.http.post(this.apiUrl, salle);
  }
}
