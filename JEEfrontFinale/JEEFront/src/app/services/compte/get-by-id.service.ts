import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetByIdService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/compte';
  
    constructor(private http: HttpClient) {}
  
    // Méthode pour obtenir un compte par ID
    getCompteById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
  
}
