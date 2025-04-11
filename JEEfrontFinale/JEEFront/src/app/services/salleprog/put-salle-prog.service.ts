import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutSalleProgService {

  private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/film';  

  constructor(private http: HttpClient) { }

  // Méthode pour mettre à jour un salleprog
  updateSalleProg(salleprog: any): Observable<any> {
    return this.http.put(this.apiUrl, salleprog);
  }
}
