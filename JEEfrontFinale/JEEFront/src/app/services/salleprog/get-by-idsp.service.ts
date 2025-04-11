import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetByIdspService {
  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/salleprog';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir un salleprog par ID
  getSalleProgById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
