import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteSeanceService {
 private apiUrl = 'http://localhost:8080/CinemaExamen/cinemaREST/seance';  

  constructor(private http: HttpClient) { }

  // Méthode pour supprimer une seance
  deleteSeance(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;  
    return this.http.delete(url);
  }
}
