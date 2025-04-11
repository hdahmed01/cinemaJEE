import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PutSeanceService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/seance';  

  constructor(private http: HttpClient) { }

  // Méthode pour mettre à jour une seance
  updateSeance(seance: any): Observable<any> {
    return this.http.put(this.apiUrl, seance);
  }
}
