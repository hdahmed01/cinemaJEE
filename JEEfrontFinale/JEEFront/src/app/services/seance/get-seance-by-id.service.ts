import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSeanceByIdService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/seance';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir une senace par ID
  getSeanceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
